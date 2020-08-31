import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="about">
        <Container>
          <h1> About</h1>
          <Grid>
            <div>
              <h2>Empowering Women in Tech</h2>
              <p>
                We're dedicated to empowering and supporting a network of leading women in tech 
                at the University of California, Riverside. We're UCR Women in Computing.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_fast.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Grow and thrive - academically, professionally, and personally.</h2>
              <p> 
              From mentorship, professional development workshops, and social events, 
              we aim to offer all the opportunities and resources necessary for success within our 
              incredible and diverse community of women technologists here at the 
              University of California, Riverside.
              </p>
            </div>
          </Grid>
          {/* <Grid>
            <div>
              <h2>Grow and build your ideas</h2>
              <p>
                Waste no more time on tooling and performance. Focus on the the
                site you want to build and nothing more.
                <br />
                <br />
                Gatsby is fast in every way that matters.
              </p>
            </div>

            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid> */}
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
