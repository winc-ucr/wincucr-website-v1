import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'When are general meetings?',
    content: () => (
      <>
        Our meetings are on this day at this time on odd weeks.
      </>
    ),
  },
  {
    title: 'How can I get more involved with the club?',
    content: () => (
      <>
        Apply to our intern program and keep an eye out for executive board applications in the winter.
      </>
    ),
  },
  {
    title: 'Where can I find the latest news with WINC?',
    content: () => (
      <>
        You can find what we're up to on Instagram, Facebook, and Twitter. 
      </>
    ),
  },
  {
    title: 'How can I become a sponsor?',
    content: () => (
      <>
        Please fill out our 
        <ExternalLink href="https://jamstack.org/"> sponsor interest form </ExternalLink>
         and we will send you our packet
      </>
    ),
  },
  {
    title: 'My question is not here, how do I contact an officer?',
    content: () => (
      <>
        DM our Instagram and an officer will be with you shortly
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
