import { Wrapper } from "./styles";

interface ComodidadeProps {
  comodidadeImg: any;
  textSup: string;
  textSub: string;
}

export function Comodidade({
  comodidadeImg,
  textSup,
  textSub,
}: ComodidadeProps) {
  return (
    <Wrapper>
      <img src={comodidadeImg} alt="Comodidade" />
      <div>
        <h3>{textSup}</h3>
        <p>{textSub}</p>
      </div>
    </Wrapper>
  );
}
