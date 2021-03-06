import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'
import services from 'assets/services'

const EthAddress = styled.span`
white-space: nowrap;
text-overflow: ellipsis;
display: block;
overflow: hidden;
`

class ActiveSubscriptions extends Component {

  render() {
    const {removeService, services } = this.props

    return (
      <Grid doubling relaxed columns={4}>
        { services.map((service) => {
          return (
            <Grid.Column key={service.key}>
              <Card centered onClick={() => removeService(service.key)}>
                <Image style={{width: '300px', height:'300px'}} src={require(`../../../${service.picture}`)} />
                  <Card.Content>
                    <Card.Header>{service.name}</Card.Header>
                    <Card.Meta>
                      <EthAddress className='date'>{service.address}}</EthAddress>
                    </Card.Meta>
                    <Card.Description>{`$${service.price} / ${service.interval}`}</Card.Description>
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
