import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';


import InstagramIcon from '@static/icons/instagram.svg';
import TwitterIcon from '@static/icons/twitter.svg';
import LinkedIn from '@static/icons/linkedin.svg';
import SpotifyIcon from '@static/icons/spotify.svg';
import GithubIcon from '@static/icons/github.svg';


const SOCIAL = [
  {
    icon: LinkedIn,
    link: 'https://www.linkedin.com/company/ucr-women-in-computing/',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram.com/wincucr',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/wincucr',
  },
  {
    icon: SpotifyIcon,
    link: 'https://twitter.com/wincucr',
  },
  {
    icon: GithubIcon,
    link: 'https://github.com/winc-ucr',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <h2>WINC</h2>
              <span>
                Email us
                {` `}
                <ExternalLink href="mailto:wincucr@gmail.com">
                  wincucr@gmail.com
                </ExternalLink>
              </span>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <ExternalLink key={link} href={link}>
                  <img src={icon} alt="link" />
                </ExternalLink>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 48px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;
