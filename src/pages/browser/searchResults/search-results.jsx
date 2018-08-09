import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

class ActiveSubscriptions extends Component {

  render() {
    const { results } = this.props
    return (
      <Fragment>
        {results.map((result) => {
          const data = result.results[0]
          return (
          <Grid.Column>
            <Card>
              <Image src={data.image} />
              <Card.Content>
                <Card.Header>{ data.title }</Card.Header>
                <Card.Meta>
                  <span className='date'>{`${data.price} / Month`}</span>
                </Card.Meta>
                <Card.Description>{data.description}</Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column> )
        })}
      </Fragment>
    )
  }
}

export default ActiveSubscriptions;
