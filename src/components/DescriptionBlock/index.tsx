import { Container } from "./styles";

interface DescriptionBlockProps {
  text?: string;
  strong?: string;
}

export function DescriptionBlock({ strong, text }: DescriptionBlockProps) {
  return (
    <Container>
      <p>
        <strong>{strong}</strong>
      </p>
      <p>{text}</p>
    </Container>
  );
}
