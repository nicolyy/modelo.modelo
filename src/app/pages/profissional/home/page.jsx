import Link from "next/link"
import Image from "next/image"

import "../../../../components/Styles/profissional-home.scss"

import Lupa from "../../../../../public/lupa.png"
import Pacientes from "../../../../../public/pacientes.png"
import Perfil from "../../../../../public/perfil2.png"




export default function HomeMedico(){
    return(
        <>
        <section>
            <div className="container-boasvindas">
                <h1>Olá, Nome do Usuario  </h1>
                <p>Vamos acompanhar os seus pacientes?</p>
            </div>
            
            <div className="options-profissional">
                <h3>Atendimento</h3>
                <div className="container-options">
                    <div>
                        <Link className="options-item" href="/pages/profissional/pesquisar-paciente">
                            <Image src={Lupa} alt="" />
                            <p>PESQUISAR</p>
                        </Link>
                    </div>
                    <div>
                        <Link className="options-item" href="/pages/profissional/pacientes" >
                            <Image src={Pacientes} alt="" />
                            <p>PACIENTES</p>
                        </Link>
                    </div>
                    <div >
                        <Link className="options-item" href="/pages/profissional/meu-perfil">
                            <Image src={Perfil}  alt="" />
                            <p>MEU PERFIL</p>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}