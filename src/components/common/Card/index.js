import styled from 'styled-components';

export const Card = styled.div`
  padding: 4rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;