import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import StyledExternalLink from '@common/ExternalLink';

import { Section, Container } from '@components/global';

const Programs = () => (
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

        art_comm: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "comm" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_intern: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "intern" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_meh: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "meh" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_convo: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "convo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "Version control-pana (prof dev)" }
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
      <Section id="programs">
        <Container>
        <h1> Programs</h1>
          <Grid>
            <div>
              <h2>Mentorship</h2>
              <p>
              A yearlong program focused on helping undergraduate students learn from their peers about academics, 
              company interviews, research, internships and much more. 
              <br/>
              <br/>
               This program pairs over 30+ mentors and mentees, allowing them to hone their interpersonal and technical skills. 
               We offer mentorship-exclusive events every quarter to help build these connections.
               <br/>
               <br/>
               <p>
                <StyledExternalLink href="https://linktr.ee/winc_ucr">
                  Join the program &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
              </p>
            </div>
            <Art>
              <Img fluid={data.art_comm.childImageSharp.fluid} />
            </Art>
          </Grid>
          <Grid inverse>
            <Art>
              <Img fluid={data.art_intern.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Intern Program</h2>
              <p> 
              Learn what it takes to support the community of women in tech at UCR by working closely with our executive board. Past interns
              have worked on building our website, ideating workshops, and design.
              <br/>
              <br/>
              Intern applications will go live on October 31st, 2020.
              </p>
            </div>
          </Grid>
          <Grid>
            <div>
              <h2>Profession & Technical Development</h2>
              <p>
                Our workshops prepare you to break into tech. From coding interviews to building an online presence,
                we teach you what our network of members learned when they worked in industry.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_ideas.childImageSharp.fluid} />
            </Art>
          </Grid>

          <Grid inverse>
            <Art>
              <Img fluid={data.art_convo.childImageSharp.fluid} />
            </Art>
            <div>
              <h2>Conversations</h2>
              <p> 
              Let's Talk Circles, where our community comes together to discuss future projects, 
              mental health, obstacles and successful achievements we have had.
             <br/>
             <br/>
             Our podcast, "Women in Conversations" catches up with WINC alumni on their newest endevours, advice, and
             stories navigating the tech industry. Listen on Spotify, Apple Podcasts, or Soundcloud.
             <br/>
             <br/>
             <StyledExternalLink href="https://linktr.ee/winc_ucr">
                  Listen now &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </div>
          </Grid>

          <Grid>
            <div>
            <h2>Community</h2>
              <p>
                Bonding isn't put on the backburner here. Our inclusive bonding events including s’more’s socials, obstacle courses, game nights, dinners and more. 
                We hope to give our members a chance to interact with each other in a more casual setting, to get to know each other better.
              </p>
            </div>
            <Art>
              <Img fluid={data.art_meh.childImageSharp.fluid} />
            </Art>
          </Grid>

          <Grid inverse>
            <Art>
              <Img fluid={data.art_learn.childImageSharp.fluid} />
            </Art>
            <div>
            <h2>Paying it Forward</h2>
              <p>
              WINC's K-12 Outreach programs introduce the future generation of STEM students 
              to the excitement and challenge of engineering. 
              <br/>
              <br/>
              <StyledExternalLink href="https://linktr.ee/winc_ucr">
                  Learn more &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </div>
          </Grid>

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

export default Programs;
