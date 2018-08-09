import React, { Component, Fragment } from 'react'
import { PageHeader, ComponentWrapper } from 'components'
import { Table, Header, Rating} from 'semantic-ui-react'
import { theme } from 'assets/theme'
import styled from 'styled-components'


class AboutPage extends Component {

  render() {
    return (
      <Fragment>
        <PageHeader>{'About'}</PageHeader>
        A website by Reilly Bova :)
      </Fragment>
    )
  }
}

export default AboutPage;
