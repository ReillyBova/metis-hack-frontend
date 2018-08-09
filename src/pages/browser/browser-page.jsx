import React, { Component, Fragment } from 'react'
import { PageHeader, ComponentWrapper } from 'components'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'
import { theme } from 'assets/theme'
import styled from 'styled-components'
import _ from 'lodash'
import faker from 'faker'
import {SearchResults} from './searchResults'

const Background = styled.div`
background-color: white;
`
const getResults = () =>
  _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
  }))

const source = _.range(0, 12).reduce((memo) => {
  const name = faker.hacker.noun()

  // eslint-disable-next-line no-param-reassign
  memo[name] = {
    name,
    results: getResults(),
  }

  return memo
}, {})

class BrowserPage extends Component {
  componentWillMount() {
      this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
      this.setState({ isLoading: true, value })

      setTimeout(() => {
        if (this.state.value.length < 1) return this.resetComponent()

        const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
        const isMatch = result => re.test(result.title)

        const filteredResults = _.reduce(
          source,
          (memo, data, name) => {
            const results = _.filter(data.results, isMatch)
            if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

            return memo
          },
          {},
        )

        this.setState({
          isLoading: false,
          results: filteredResults,
        })
      }, 300)
    }

    render() {
      const { isLoading, value, results } = this.state
      
      const resultArray = (results.length === undefined)
          ? Object.keys(results).map((name) => results[name])
          : []
      const sourceArray = Object.keys(source).map((name) => source[name])
    return (
      <Fragment>
        <PageHeader>{'Add Subscriptions'}</PageHeader>
        <Background>
          <ComponentWrapper>
            <Grid>
              <Grid.Column>
               <Search
                 category
                 loading={isLoading}
                 placeholder={'Search here!'}
                 onResultSelect={this.handleResultSelect}
                 onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                 results={results}
                 value={value}
                 {...this.props}
                 />
              </Grid.Column>
            </Grid>
            <Grid doubling relaxed columns={4}>
              <SearchResults results={!!resultArray.length ? resultArray : sourceArray} />
            </Grid>
         </ComponentWrapper>
       </Background>
     </Fragment>
     )
   }
 }

 export default BrowserPage
