import gradeSvg from "../../assets/elements/grade.svg";
import lobbyImg from "../../assets/lobby.png";
import localizationImg from "../../assets/localization.png";
import { DescriptionBlock } from "../DescriptionBlock";
import { Container, Content } from "./styles";

export function SectionLocalizacaoPrivilegiada() {
  return (
    <Container>
      <img src={gradeSvg} alt="grade vertical" className="grade-vertical" />
      <img src={lobbyImg} alt="lobby" className="lobby" />
      <Content>
        <div className="description-content">
          <h2>Localização Privilegiada</h2>
          <p>
            O Lux Design Concept está na localização mais estratégica da cidade:
            em pleno Umarizal. Ponto de partida para tudo que Belém oferece de
            melhor. Viva a experiência de estar cercado pelos melhores
            stabelecimentos e serviços.
          </p>
        </div>
        <div className="footer-content">
          <img
            src={localizationImg}
            alt="soares carneiro com pedro alvares cabral"
            className="img-fluid mapa"
          />
          <div className="mb-0 mb-xl-5">
            <DescriptionBlock
              strong="Entre em grande estilo"
              text="Sinta-se bem desde a entrada"
            />
          </div>
        </div>
      </Content>
    </Container>
  );
}
