import React, { Component, Fragment } from 'react'
import { PageHeader, ComponentWrapper } from 'components'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { theme } from 'assets/theme'
import styled from 'styled-components'
import _ from 'lodash'
import {SearchResults} from './searchResults'
import services from 'assets/services'

const Background = styled.div`
background-color: white;
`

class BrowserPage extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  intervalToPeriod = (interval) => {
    switch (interval) {
      case 'Day': return 'Daily';
      case 'Month': return 'Monthly';
      case 'Year': return 'Yearly';
      default: return 'Custom Period';
    }
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.name)

      this.setState({
        isLoading: false,
        results: (_.filter(services, isMatch).map((result) => {
          return (
            { ...result,
              title: result.name,
              description: this.intervalToPeriod(result.interval),
              image: require(`../../${result.picture}`),
            }
          )
      }))
    })}, 300)
  }

  render() {
    const { isLoading, value, results } = this.state
    return (
      <Fragment>
        <PageHeader>{'Add Subscriptions'}</PageHeader>
        <Background>
          <ComponentWrapper>
            <Grid>
              <Grid.Column>
                <Search
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                  results={results}
                  value={value}
                  {...this.props}
                />
            </Grid.Column>
            </Grid>
            <SearchResults results={(!!results.length) ? results : services } />
          </ComponentWrapper>
        </Background>
      </Fragment>
    )
  }
}

export default BrowserPage
