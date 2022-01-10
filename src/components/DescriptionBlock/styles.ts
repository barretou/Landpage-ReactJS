import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  padding: 3rem 5rem;
  background-color: var(--gold-color);
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--brow-color);
  }

  p {
    color: var(--shape-color) !important;
    letter-spacing: 2px;
  }
`;
