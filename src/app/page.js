import Image from "next/image";
import Link from "next/link";
import LInk from "next/link";

import "../components/Styles/style.scss";
import Medica from "../../public/medica.jpg";

export default function Home() {
  return(
  <>
      <section className="container-capa">
        <div className="capa-titulo">
          <h1>GLOBAL SOLUTIONS</h1>
          <h2>NTC HEALTH</h2>
          <Link className="ancora-saber-mais" href="">Saber Mais</Link>
        </div>
      </section>
      <section className="container-objetivo">
        <div className="objetivo-conteudo">
              <h3 className="obj-titulo">Descrição do Projeto</h3>
              <p>
              O projeto NTC Health consiste na criação de um despertador de acompanhamento para pacientes, 
              onde o médico responsável podera cadastrar as  necessidades do mesmo, de acordo com os medicamentos
              necessários. A agenda também determinará o intervalo de horas entre cada medicação, e o paciente poderá 
              e estipulará a data de inicio e fim. 
              </p>
              <h3>Qual o nosso objetivo</h3>
              <p>
              O Objetivo do projeto é melhorar a organização diante da relação
              entre paciente e médico, garantindo um acompanhamento sólido por meio da agenda
              digital de medicação. Visando aumentar a acessibilidade de dados para o paciente e o médico
              </p>
        </div>
        <Image className="objetivo-img" src={Medica} alt="Medica com um celular"/>
      </section>
      <section className="container-conteudo">
        <h3>Nossa solução foi pensada para dispositivos mobile.
          Para uma melhor experiência, ajustar o tamanho da tela</h3>
      </section>
      <section className="container-solucao">
        <h1>Conheça a nossa solução!</h1>
        <Link className="acessar-solucao" href="/pages/home">ACESSAR</Link>
      </section>
  </>
  )

}
