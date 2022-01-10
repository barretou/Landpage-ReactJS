import styled from "styled-components";
import coworkingImg from "../../assets/coworking.png";

export const Container = styled.div`
  background-image: url(${coworkingImg});
  background-color: var(--black-color);
  background-repeat: no-repeat;
  max-width: 100%;
  height: 70vh;
  position: relative;
  div {
    position: absolute;
    width: 32rem;
    bottom: -2rem;
    right: 2rem;

    @media (max-width: 575.98px) {
      width: 24rem;
      right: 0.25rem;
    }
  }
`;
