import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from 'assets/theme'

const PageHeaderWrapper = styled.div`
color: white;
background-color: ${theme.purple};
font-size: 32px;
font-weight: 600;
padding: 136px 16px 16px 16px;
`

class PageHeader extends Component {

  render() {
    return (
      <PageHeaderWrapper>
        {this.props.children}
      </PageHeaderWrapper>
    )
  }
}

export default PageHeader;
