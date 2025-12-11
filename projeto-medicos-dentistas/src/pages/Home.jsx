import frame from "../assets/frame.png";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import estetoscopio from "../assets/estetoscopio.png";
function Home() {
  return (
    <>
      <section className="main">
        <div className="texto">
          <div className="estetoscopio">
            <p>
              <img src={estetoscopio} alt="" />
              Saúde para todos
            </p>
          </div>
          <h1>Saúde e cuidado sem barreiras</h1>
          <p>
            Um projeto dedicado a oferecer atendimento médico e odontológico
            gratuito para pessoas que mais precisam na nossa comunidade.
          </p>
          <div className="botoes">
            <Link to="/voluntario" className="botao-voluntario">
              Seja Voluntário
            </Link>
            <Link to="/" className="botao-ajudar">
              Como Ajudar
            </Link>
          </div>
        </div>
        <div className="foto">
          <img src={frame} alt="" />
        </div>
      </section>

      <section className="missao">
        <div className="content-missao">
          <div className="titulo-missao">
            <h2>Nossa Missão</h2>
            <p>
              Transformar vidas através do acesso universal a saúde de
              qualidade.
            </p>
          </div>
          <div className="cards-missao">
            <div className="card-missao">
              <h3>Acesso Equitativo</h3>
              <p>
                Garantir que todos tenham acesso a cuidados de saúde de
                qualidade, independentemente de sua condição financeira.
              </p>
            </div>

            <div className="card-missao">
              <h3>Comunidade Forte</h3>
              <p>
                Construir uma rede de profissionais de saúde dedicados a servir
                com compaixão e profissionalismo.
              </p>
            </div>

            <div className="card-missao">
              <h3>Bem-estar Total</h3>
              <p>
                Oferecer atendimento integral em medicina geral e odontologia
                para melhorar a qualidade de vida.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="impacto">
        <h2>Nosso Impacto</h2>
        <p>Transformando a saúde de nossa comunidade, um paciente de cada vez.</p>
        <div className="cards-impacto">
          <div className="card-impacto">
            <p className="verde">2,500+</p>
            <p>Pessoas Atendidas</p>
          </div>
          <div className="card-impacto">
            <p className="verde">150+</p>
            <p>Profissionais Voluntários</p>
          </div>
          <div className="card-impacto">
            <p className="verde">98%</p>
            <p>Satisfação dos Pacientes</p>
          </div>
          <div className="card-impacto">
            <p className="verde">5+</p>
            <p>Anos de Dedicação</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
