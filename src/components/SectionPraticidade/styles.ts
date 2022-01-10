import styled from "styled-components";

export const Container = styled.section`
  padding-top: 14rem;
  padding-bottom: 10rem;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: var(--black-color);
  display: grid;
  place-items: center;
`;

interface FeatureContentProps {
  isMid?: boolean;
}

export const FeatureContent = styled.div<FeatureContentProps>`
  margin-block: 2rem;
  display: flex;
  width: 22rem;
  padding: 1rem;
  border-left: ${(props) => (props.isMid ? "2px solid #c2c2c2" : "none")};
  border-right: ${(props) => (props.isMid ? "2px solid #c2c2c2" : "none")};

  .gold-item {
    color: var(--gold-color);
    display: inline-block;

    align-self: center;
    padding: 1rem;
    font-size: 4rem;

    span {
      display: inline-block;
      font-size: 2rem;
    }
  }
  .content {
    display: inline-block;
    align-self: center;
    h3 {
      font-size: 1.5rem;
      font-weight: 400;
      letter-spacing: 1px;
    }
  }
`;

export const FooterContent = styled.div`
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    h3 {
      display: inline-block;
      margin: 0;
      padding: 0;
      text-align: center;
      font-size: 2.5rem;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  }
  p {
    margin-top: 2rem;
    margin-inline: auto;
    max-width: 32rem;
    text-align: center;
    color: #fff;
  }
`;
