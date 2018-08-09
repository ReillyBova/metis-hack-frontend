import React, { Component, Fragment } from 'react'
import { PageHeader, SectionHeader, ComponentWrapper } from 'components'
import { ActiveSubscriptions } from './activeSubscriptions'
import { Funds } from './funds'
import { theme } from 'assets/theme'
import styled from 'styled-components'

const Background = styled.div`
background-color: white;
`

class AccountPage extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader>{'My Account'}</PageHeader>
        <SectionHeader>{'Active Subscriptions'}</SectionHeader>
          <Background>
            <ComponentWrapper>
              <ActiveSubscriptions />
            </ComponentWrapper>
          </Background>
        <SectionHeader>{'Funds'}</SectionHeader>
          <ComponentWrapper>
            <Funds />
          </ComponentWrapper>
      </Fragment>
    )
  }
}

export default AccountPage;
