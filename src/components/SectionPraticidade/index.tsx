import { HeaderTitle } from "../HeaderTitle";
import { Container, FeatureContent, FooterContent } from "./styles";

import quadraTechImg from "../../assets/quadra-tech.png";

export function SectionPraticidade() {
  return (
    <Container>
      <HeaderTitle
        title="Praticidade"
        description="São espaços pensados para transmitir leveza e harmonia. Feitos para quem gosta de viver com classe e não abre mão da qualidade de vida"
        titleAlign="center"
        descriptionAlign="center"
      />
      <div className="row row-cols-md-3 justify-content-center">
        <FeatureContent>
          <div className="content">
            <h3>Studio e Quartos</h3>
            <h3>39,40 a 78,81m²</h3>
          </div>
        </FeatureContent>
        <FeatureContent isMid={true}>
          <h3 className="gold-item">
            1<span>e</span>2
          </h3>
          <div className="content">
            <h3>Vagas de</h3>
            <h3>Garagem</h3>
          </div>
        </FeatureContent>
        <FeatureContent>
          <h3 className="gold-item">8</h3>
          <div className="content">
            <h3>Coberturas duplex</h3>
            <h3>78,81m a 153,40m²</h3>
          </div>
        </FeatureContent>
      </div>

      <FooterContent>
        <div>
          <h3>Tecnologia com selo</h3>
          <img src={quadraTechImg} alt="Quadra Tech" />
        </div>
        <p>
          Buscamos o que existe de mais moderno em conforto e praticidade para
          você morar bem. Não é apenas automação. É inteligência para oferecer o
          máximo de segurança, facilidade e a qualidade de vida que você merece.
        </p>
      </FooterContent>
    </Container>
  );
}
