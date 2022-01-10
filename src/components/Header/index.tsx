import { Hero } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <Hero>
      <div className="text-center">
        <div className="container-logo">
          <img src={logoImg} alt="Concept" />
        </div>
      </div>
      <div className="container-content">
        <div>
          <h2>Onde mora o</h2>
          <h2>seu Sonho?</h2>
          <div className="ping-element">
            <svg viewBox="0 0 14.683 22.025">
              <path
                id="location"
                d="M16.342,24.077c.534,0,1.81-1.452,2.95-4.053a22.767,22.767,0,0,0,1.944-7.752,5.126,5.126,0,0,0-4.894-5.326,5.126,5.126,0,0,0-4.894,5.326,22.772,22.772,0,0,0,1.944,7.751C14.531,22.625,15.807,24.077,16.342,24.077Zm0,2.447C12.287,26.525,9,16.567,9,12.273A7.566,7.566,0,0,1,16.342,4.5a7.566,7.566,0,0,1,7.342,7.773C23.683,16.566,20.4,26.525,16.342,26.525Zm0-12.236a2.447,2.447,0,1,0-2.447-2.447A2.447,2.447,0,0,0,16.342,14.289Z"
                transform="translate(-9 -4.5)"
                fill="#fff"
              />
            </svg>
          </div>
          <p className="container-content-description">
            A essência da sofisticação é viver numa das regiões mais valorizadas
            de Belém, a <strong>Batista Campos.</strong>
          </p>
        </div>
      </div>
    </Hero>
  );
}
