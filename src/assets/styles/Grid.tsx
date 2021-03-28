import styled from 'styled-components';

export const Grid = styled.div<{cols: string, rows?: string}>`
  display: grid;
  grid-template-columns: ${props => (props.cols)};
  grid-template-rows: ${props => props.rows};
  justify-content: center;
  justify-items: start;
  align-content: center;
  > * {
    align-self: center;
  }

  /* Mobile */
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;