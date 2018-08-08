import React, { Component } from 'react'
import styled from 'styled-components'
import logo from '../../assets/branding/metis.svg'
import logoText from '../../assets/branding/metisText.svg'

const NavbarWrapper = styled.header`
width: 100%;
height: 100%;
position: sticky;
position: -webkit-sticky;
top: 0;
z-index: 15;
`

const NavbarMain = styled.div`
background-color: white;
height: 120px;

font-size: 24px;
font-weight: 500;

-webkit-transition: height, font-size, 0.5s ease;
transition: height, font-size, 0.5s ease;
&.mini {
  font-size: 18px;
  height: 70px;
}
`

class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <NavbarMain>
          <div class="navbar-brand">
            <img src={logo} />
            <img src={logoText} />
          </div>
          <div class="navbar-buttons">
          </div>
          <div class="navbar-links">
            <div class="navbar-link">
              <a href="/account">{`My Account`}</a>
            </div>
            <div class="navbar-link">
              <a href="/browse-subscriptions">{`Add Subscription`}</a>
            </div>
            <div class="navbar-link">
              <a href="/billing">{`Billing History`}</a>
            </div>
            <div class="navbar-link">
              <a href="/about">{`About`}</a>
            </div>
            <div class="navbar-link">
              <a href="/logout">{`Logout`}</a>
            </div>
          </div>
        </NavbarMain>
      </NavbarWrapper>
    )
  }
}

export default Navbar;
