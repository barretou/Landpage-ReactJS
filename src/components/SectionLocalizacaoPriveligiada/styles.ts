import styled from "styled-components";

export const Container = styled.section`
  padding-top: 6rem;
  padding-bottom: 2rem;
  position: relative;

  .grade-vertical {
    position: absolute;

    left: 0;
    width: 6rem;
  }
  .lobby {
    position: absolute;
    max-width: 47rem;
    right: 0;

    z-index: -1;
  }
  @media (min-width: 1566px) {
    .lobby {
      max-width: 65rem;
    }
  }
  @media (max-width: 767.98px) {
    .grade-vertical {
      width: 2rem;
    }
  }
`;

export const Content = styled.div`
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 70rem;

  .mapa {
    max-width: 27rem;
    width: 100%;
  }

  .description-content {
    max-width: 24rem;
    h2 {
      color: var(--shape-color);
      font-size: 2.2rem;
      font-weight: bold;
    }
    p {
      color: var(--gold-color);
      font-size: 1rem;
    }
  }
  .footer-content {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    align-items: center;
  }

  @media (min-width: 1566px) {
    .footer-content {
      align-items: end;
    }
  }

  @media (max-width: 575.98px) {
    .footer-content {
      margin-top: 8rem;
      justify-content: center;
    }
  }
`;
