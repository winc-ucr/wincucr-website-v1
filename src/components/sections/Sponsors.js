import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import ExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const SPONSORS = [
  {
    logo: 'balsamiq-logo-screen.png',
    link: 'https://balsamiq.com',
  },
  
];

const Sponsors = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "sponsors" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="sponsors">
        <Container style={{ position: 'relative'}}>
          <h1>Sponsors</h1>
          <SponsorsGrid>
            {SPONSORS.map(({logo, link}) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === logo
              ).node;

              return (
                <div>
                  <ExternalLink key={link} href={link}>
                    <Img fluid={img.childImageSharp.fluid}/>
                  </ExternalLink>
                </div>
              );
            })}
          </SponsorsGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const SponsorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 100%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

export default Sponsors;
