import styled from "styled-components";
import piscinaImg from "../../assets/piscina.png";

export const Container = styled.section`
  background-image: url(${piscinaImg});
  background-color: var(--black-color);
  background-repeat: no-repeat;
  max-width: 100%;
  height: 70vh;
  position: relative;

  img {
    position: absolute;
    top: 50%;
    right: 0;
    width: calc(100% - 8rem);
    max-width: 30rem;
    min-width: 20rem;
    height: auto;
    @media (max-width: 575.98px) {
      top: 24rem;
    }
  }
`;
