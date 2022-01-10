import styled from "styled-components";

const Container = styled.div`
  margin-inline: auto;
  max-width: 1200px;
  width: 100%;
  padding: 0 1rem;
`;

interface MainContainerProps {
  children: JSX.Element;
}

export function MainContainer({ children }: MainContainerProps) {
  return <Container>{children}</Container>;
}
