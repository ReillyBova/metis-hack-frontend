import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { PageHeader, SectionHeader } from 'components'

class AccountPage extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader>{'My Account'}</PageHeader>
        <SectionHeader>{'Active Subscriptions'}</SectionHeader>
        <p> active subscription viewer</p>
        <SectionHeader>{'Funds'}</SectionHeader>
        <p> history</p>
      </Fragment>
    )
  }
}

export default AccountPage;
