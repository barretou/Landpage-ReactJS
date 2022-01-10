import styled from "styled-components";

import backgroundHeroImg from "../../assets/hero.png";

export const Hero = styled.div`
  height: 100vh;
  background-image: url(${backgroundHeroImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;

  .container-logo {
    padding: 3rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: inline-block;
    img {
      width: 100%;
      max-width: 220px;
    }
  }
  .container-content {
    margin: 0 auto;
    width: 22rem;
    display: grid;
    place-items: center;
    height: 70%;
    &:hover {
      .ping-element {
        background-color: var(--shape-color);
        svg {
          path {
            fill: var(--gold-color);
          }
        }
      }
      .container-content-description {
        opacity: 1;
      }
    }
    div {
      h2 {
        margin: 0;
        padding: 0;
        font-family: "Gilroy Light";
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
        text-transform: uppercase;
      }
    }
    .container-content-description {
      opacity: 0;
      width: 18rem;
      color: var(--shape-color);
      text-align: center;
      transition: opacity 0.3s ease;
    }
    .ping-element {
      margin: 2rem auto;
      display: grid;
      place-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      width: 4rem;
      aspect-ratio: 1;
      border-radius: 100%;
      cursor: pointer;
      transition: all 0.3s ease;

      svg {
        width: 1rem;
        path {
          fill: var(--shape-color);
          transition: all 0.3s ease;
        }
      }
    }
  }
`;
