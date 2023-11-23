import Link from "next/link"
import Image from "next/image"


import Lupa from "../../../../../public/lupa.png"
import Pacientes from "../../../../../public/pacientes.png"
import Perfil from "../../../../../public/perfil2.png"



export default function HomeMedico(){
    return(
        <>
        <section>
            <div>
                <h1>Olá, Nome do Usuario {} </h1>
                <p>Vamos acompanhar os seus pacientes?</p>
            </div>
            
            <div>
                <h3>Atendimento</h3>
                <div>
                    <Link>
                        <Image src={Lupa} alt="" />
                        <p>PESQUISAR</p>
                    </Link>
                </div>
                <div>
                    <Link >
                        <Image src={Pacientes} alt="" />
                        <p>PACIENTES</p>
                    </Link>
                </div>
                <div>
                    <Link>
                        <Image src={Perfil}  alt="" />
                        <p>MEU PERFIL</p>
                    </Link>
                </div>
            </div>

        </section>
        </>
    )
}