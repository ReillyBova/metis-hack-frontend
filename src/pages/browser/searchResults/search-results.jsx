import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

const EthAddress = styled.span`
white-space: nowrap;
text-overflow: ellipsis;
display: block;
overflow: hidden;
`

class ActiveSubscriptions extends Component {
  render() {
    const { results, addService } = this.props
    return (
      <Grid doubling relaxed columns={4}>
        { results.map((result) => {
          return (
            <Grid.Column key={result.key} >
              <Card centered onClick={() => addService(result.key)}>
                <Image style={{width: '300px', height:'300px'}} src={require(`../../../${result.picture}`)} />
                <Card.Content>
                  <Card.Header>{result.name}</Card.Header>
                  <Card.Meta>
                    <EthAddress className='date'>{result.address}}</EthAddress>
                  </Card.Meta>
                  <Card.Description>{`$${result.price} / ${result.interval}`}</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          )
        })}
      </Grid>
    )
  }
}

export default ActiveSubscriptions;
