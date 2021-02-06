import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import { Container } from '@components/global';
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  StyledAnchorLink,
} from './style';

import { ReactComponent as MenuIcon } from '@static/icons/menu.svg';

const NAV_ITEMS = ['About', 'Programs', 'Team', 'Sponsors', 'FAQ'];

class Navbar extends Component {
  state = {
    mobileMenuOpen: false,
    hoverAnchorLink: false,
  };

  toggleHoverAnchorLink = () =>{
    this.setState(prevState => ({hoverAnchorLink: !prevState.hoverAnchorLink}));
    console.log(this.state.hoverAnchorLink);
  };


  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }));
  };

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false });
    }
  };

  getNavAnchorLink = item => (
    <StyledAnchorLink style={{}} onMouseEnter={this.toggleHoverAnchorLink} onMouseLeave={this.toggleHoverAnchorLink} href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      <span>{item}</span>
    </StyledAnchorLink>
  );

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  render() {
    const { mobileMenuOpen } = this.state;

    return (
      <Nav {...this.props}>
        <StyledContainer>
          <Brand>WINC</Brand>
          <Mobile>
            <button onClick={this.toggleMobileMenu} style={{ color: 'black' }}>
              <MenuIcon />
            </button>
          </Mobile>

          <Mobile hide>{this.getNavList({})}</Mobile>
        </StyledContainer>
        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
      </Nav>
    );
  }
}

export default Navbar;
