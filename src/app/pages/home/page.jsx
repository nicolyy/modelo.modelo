import next from "next"
import Link from "next/link"

import "../../../components/Styles/home.scss"


export default function Home(){


    return(
        <>
        <main className="container-principal">
            <div className="fazer-login-conteudo">
                <h1>NTC THERAPY</h1>
                <p>Pensando na sua saúde</p>
            </div>

            <div className="botoes-login">
            <Link className="btn-paciente" href="../login-paciente">Paciente</Link>
            <Link className="btn-profissional" href="/login">Profissional da Saúde</Link>
            </div>
        </main>
        
        </>
    )
}