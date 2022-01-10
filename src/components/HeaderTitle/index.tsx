import { Container } from "./styles";

interface HeaderTitleProps {
  title: string;
  description?: string;
  descriptionAlign?: "start" | "center";
  titleAlign?: "start" | "center";
}

export function HeaderTitle({
  title,
  description,
  descriptionAlign,
  titleAlign,
}: HeaderTitleProps) {
  return (
    <Container descriptionAlign={descriptionAlign} titleAlign={titleAlign}>
      <h2>{title}</h2>
      <p>{description}</p>
    </Container>
  );
}
