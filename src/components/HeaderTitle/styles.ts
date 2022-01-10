import styled from "styled-components";

interface ContainerProps {
  titleAlign?: "start" | "center";
  descriptionAlign?: "start" | "center";
}

export const Container = styled.div<ContainerProps>`
  max-width: 32rem;
  h2 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    text-align: ${(props) => props.titleAlign};
    @media (max-width: 575.98px) {
      text-align: center;
    }
  }
  p {
    text-align: ${(props) => props.descriptionAlign};
    font-size: 1rem;
    color: var(--shape-color);
    letter-spacing: 1px;
    @media (max-width: 575.98px) {
      text-align: center;
    }
  }
`;
