import React, { Component, Fragment } from 'react'
import { PageHeader, SectionHeader, ComponentWrapper } from 'components'
import { Grid, Card, Header, Image } from 'semantic-ui-react'
import { theme } from 'assets/theme'
import { reilly, kim, aaron } from 'assets/images'
import styled from 'styled-components'


class AboutPage extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader>{'About'}</PageHeader>
        <SectionHeader>{'The Project'}</SectionHeader>
        <ComponentWrapper>
          <Card centered style={{width:'100%'}}>
            <Card.Content><Header>Motivation</Header></Card.Content>
            <Card.Content style={{fontSize: '18px'}}>
              <p>”Monthly subscriptions are a key monetization channel
                for legacy web, and arguably they are the most healthy
                monetization channel for businesses on the legacy web
                (especially when compared to ad/surveillance) based models.
                They are arguably more healthy than a token based economic
                system (depending upon the vesting model of the ICO) because...
              </p>
              <p>
                For a User:
                <ul>
                  <li>You don’t have to read a complex whitepaper to use a dapps utility (as opposed to utility tokens)</li>
                  <li>You don’t have to understand the founder’s vesting schedules</li>
                  <li>You can cancel anytime on your own terms</li>
                </ul>
              </p>
              <p>
                For a dApp Service Provider:
                <ul>
                  <li>Since you know your subscriber numbers, churn numbers, conversion rate, you get consistent cash flow</li>
                  <li>You get to focus on making your customers happy (as opposed to having two actors: speculators & users)</li>
                </ul>
              </p>

                For these reasons, we think it’s creating a standard way to do ‘subscriptions’ on Ethereum.” - Kevin Owocki
            </Card.Content>
          </Card>
        </ComponentWrapper>
        <SectionHeader>{'The Team'}</SectionHeader>
        <ComponentWrapper>
          <Grid relaxed columns={3}>
            <Grid.Column>
              <Card>
                <Image src={reilly} />
                <Card.Content style={{fontSize: '18px'}}>
                  Reilly Bova
                  <Card.Description style={{fontSize: '14px'}}>Product Manager, Frontend Engineer</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src={kim} />
                <Card.Content style={{fontSize: '18px'}}>
                  Kim Macharia
                  <Card.Description style={{fontSize: '14px'}}>Marketing, Business Development</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card>
                <Image src={aaron} />
                <Card.Content style={{fontSize: '18px'}}>
                  Reilly Bova
                  <Card.Description style={{fontSize: '14px'}}>Protocol Engineer</Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid>
        </ComponentWrapper>
      </Fragment>
    )
  }
}

export default AboutPage;
