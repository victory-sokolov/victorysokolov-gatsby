import styled from "styled-components";

export const Grid = styled.div<{ cols: string; rows?: string; gap?: string }>`
    display: grid;
    grid-template-columns: ${props => props.cols};
    grid-template-rows: ${props => props.rows};
    gap: ${props => props.gap};
    justify-content: center;
    justify-items: start;
    align-content: center;

    @media ${({ theme }) => theme.t.breakpoints.mobile} {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`;
