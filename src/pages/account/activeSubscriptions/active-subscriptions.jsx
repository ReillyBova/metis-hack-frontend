import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Grid, Card, Icon, Image } from 'semantic-ui-react'

class ActiveSubscriptions extends Component {

  render() {
    return (
      <Grid doubling relaxed columns={4}>
        <Grid.Column>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Netflix - Premium</Card.Header>
              <Card.Meta>
                <span className='date'>{'$24.99 / Month'}</span>
              </Card.Meta>
              <Card.Description>Next payment due on 9/1/2018</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Ujo - Basic</Card.Header>
              <Card.Meta>
                <span className='date'>{'$0.99 / Day'}</span>
              </Card.Meta>
              <Card.Description>Next payment due on 9/10/2018</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Balance</Card.Header>
              <Card.Meta>
                <span className='date'>{'$100,000,000 / Year'}</span>
              </Card.Meta>
              <Card.Description>Next payment due on 2/24/2018</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Amazon Prime</Card.Header>
              <Card.Meta>
                <span className='date'>{'24.99 BEZOS / Week'}</span>
              </Card.Meta>
              <Card.Description>Next payment due on 8/17/2018</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>Morgage</Card.Header>
              <Card.Meta>
                <span className='date'>{'$20,000 / Month'}</span>
              </Card.Meta>
              <Card.Description>Next payment due on 9/16/2018</Card.Description>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default ActiveSubscriptions;
