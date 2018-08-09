import React, { Component } from 'react'
import styled from 'styled-components'
import { theme } from 'assets/theme'

const SectionHeaderWrapper = styled.div`
color: white;
background-color: ${theme.lavender};
font-size: 28px;
font-weight: 600;
padding: 12px 16px;
`

class SectionHeader extends Component {

  render() {
    return (
      <SectionHeaderWrapper>
        {this.props.children}
      </SectionHeaderWrapper>
    )
  }
}

export default SectionHeader;
