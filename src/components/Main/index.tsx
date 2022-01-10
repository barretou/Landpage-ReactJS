import { SectionComodidades } from "../SectionComodidades";
import { SectionCoworking } from "../SectionCoworking";
import { SectionLocalizacaoPrivilegiada } from "../SectionLocalizacaoPriveligiada";
import { SectionPraticidade } from "../SectionPraticidade";
import { SectionPiscina } from "./../SectionPiscina/index";

export function Main() {
  return (
    <main>
      <SectionLocalizacaoPrivilegiada />
      <SectionPiscina />
      <SectionPraticidade />
      <SectionCoworking />
      <SectionComodidades />
    </main>
  );
}
