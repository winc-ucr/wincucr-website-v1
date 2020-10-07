import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Anchita Bora',
    image: 'anchita.jpg',
    role: 'President',
  },
  {
    name: 'Ruth Hwang',
    image: 'ruth.jpg',
    role: 'Vice President',
  },
  {
    name: 'Pamodya Peiris',
    image: 'pam.jpg',
    role: 'Secretary',
  },
  {
    name: 'Lauren Flemmer',
    image: 'lauren.jpg',
    role: 'Treasurer',
  },
  {
    name: 'Keila Braden',
    image: 'keila.jpg',
    role: 'Marketing',
  },
  {
    name: 'Megan McDaniel',
    image: 'megan.jpg',
    role: 'External Ops',
  },
  {
    name: 'Paris Hom',
    image: 'paris.jpg',
    role: 'External Ops',
  },
  {
    name: 'Jeana Tijerina',
    image: 'jeana.jpg',
    role: 'Internal Ops',
  },
  {
    name: 'Dhruvi Faria',
    image: 'dhruvi.jpg',
    role: 'Membership',
  },
  {
    name: 'Puloma Katiyar',
    image: 'puloma.jpg',
    role: 'Membership',
  },
  {
    name: 'Cristina Lawson',
    image: 'cristina.jpg',
    role: 'Professional Development',
  },
  {
    name: 'Van Truong',
    image: 'van.jpg',
    role: 'Webmaster',
  },
  {
    name: 'Divyanshi Srivastava',
    image: 'Divyanshi.jpg',
    role: 'Graduate Outreach',
  },
  {
    name: 'Audrey Der',
    image: 'audrey.jpg',
    role: 'Graduate Outreach',
  },
  
  
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
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
      <Section id="team" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>The Team</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <Img fluid={img.childImageSharp.fluid} alt={name} />
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
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

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
