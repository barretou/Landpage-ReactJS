import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 17rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  align-items: center;
  @media (max-width: 1200.98px) {
    justify-self: center;
  }
  div {
    h3 {
      font-size: 1rem;
    }
    p {
      color: var(--shape-color);
    }
  }
`;
