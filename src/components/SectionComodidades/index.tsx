import { Comodidade } from "../Comodidade";
import { HeaderTitle } from "../HeaderTitle";
import { MainContainer } from "../MainContainer";
import { ComodidadeContainer, Container } from "./styles";
import { comodidades } from "./comodidadesData";

export function SectionComodidades() {
  return (
    <MainContainer>
      <Container>
        <HeaderTitle
          title="Comodidades"
          description="A essência da sofisticação é viver numa das regiões mais valorizadas de Belém, a Batista Campos. Cercado de muito verde e de todas as conveniências que o bairro tem a oferecer."
          descriptionAlign="start"
          titleAlign="start"
        />
        <ComodidadeContainer>
          {comodidades.map((comodidade) => (
            <Comodidade
              key={comodidade.id}
              comodidadeImg={comodidade.comodidadeImg}
              textSup={comodidade.textSup}
              textSub={comodidade.textSub}
            />
          ))}
        </ComodidadeContainer>
      </Container>
    </MainContainer>
  );
}
