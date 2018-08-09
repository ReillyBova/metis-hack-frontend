import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { logo, logoText } from 'assets/images'
import { theme } from 'assets/theme'
import $ from 'jquery';

const NavbarWrapper = styled.header`
width: 100%;
height: 120px;
position: fixed;
top: 0;
z-index: 15;
`

const NavbarMain = styled.div`
background-color: white;
height: 120px;

font-size: 24px;
font-weight: 500;

transition: height, font-size, 0.5s ease;
&.mini {
  font-size: 18px;
  height: 70px;

  .navbar-brand-logo {
    width: 38px!important;
  }
  .navbar-brand-text {
    width: 176px!important;
}
`

const NavbarBrand = styled.div`
position: absolute;
font-size: 24px;
z-index: 12;

display: flex;
align-items: center;

.navbar-brand-logo {
  width: 88px;
  margin: 16px;

  transition: width, padding, 0.5s ease;
}
.navbar-brand-text {
  width: 176px;
  animation-name: fadeDown;

  transition: width, padding, 0.5s ease;

  animation-iteration-count: 1;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-fill-mode: both;

  @keyframes fadeDown {
    0% { opacity: 0; transform: translateY(-50px); }
    25% { opacity: 0; -webkit-transform: translateY(-50px); }
    100% { opacity: 1; transform: translateY(0); }
  }
}
`
const NavbarLinks = styled.div`
padding: 0 24px 0 300px;
height: 100%;
justify-content: flex-end;
flex-flow: row wrap;
align-items: center;
display:flex;
align-content: center;
border-bottom: 3px solid ${theme.purple};
`
const NavbarLink = styled.div`
margin: 4px 12px;
border-bottom: 1px solid transparent;

a.active {
   color: ${theme.purple};
}

&:hover {
  cursor: pointer;
  border-bottom: 1px solid ${theme.purple};
  a { color: ${theme.purple}; }
}
`

class Navbar extends Component {

  scroll_navbar = () => {
    if ($(document).scrollTop() > 115) {
      $('#navbarMain').addClass('mini');
    } else {
      $('#navbarMain').removeClass('mini');
    }
  }

  componentDidMount() {
    $(window).scroll(this.scroll_navbar);
  }
  render() {
    return (
      <NavbarWrapper>
        <NavbarMain id={'navbarMain'}>
            <NavbarBrand>
              <img className={'navbar-brand-logo'} alt="" src={logo} />
              <img className={'navbar-brand-text'} alt="" src={logoText} />
            </NavbarBrand>
          <NavbarLinks>
            <NavbarLink>
              <NavLink
                isActive={(match, location) => {
                  return ((location.pathname === `${process.env.PUBLIC_URL}/`)
                          || (location.pathname === `${process.env.PUBLIC_URL}/account`))
                }}
                to={`${process.env.PUBLIC_URL}/account`}
              >
                {`My Account`}
              </NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/browse`}>{`Add Subscription`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/billing`}>{`Billing History`}</NavLink>
            </NavbarLink>
            <NavbarLink>
            <NavLink to={`${process.env.PUBLIC_URL}/about`}>{`About`}</NavLink>
            </NavbarLink>
            <NavbarLink>
              <NavLink to={`${process.env.PUBLIC_URL}/logout`}>{`Logout`}</NavLink>
            </NavbarLink>
          </NavbarLinks>
        </NavbarMain>
      </NavbarWrapper>
    )
  }
}

export default Navbar;
