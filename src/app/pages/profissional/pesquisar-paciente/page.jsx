import Link from "next/link"
import Image from "next/image"

import Lupa from "../../../../../public/lupa.png"
import Adicionar from "../../../../../public/adicionar.png"
import "../../../../components/Styles/profissional-pesquisa.scss"

export default function PesquisarPaciente(){

    return(
        <>
        <section className="container-pesquisar-paciente">
            <div className="container-boasvindas">
                <h1>Olá, Nome do Usuario {} </h1>
                <p>Vamos acompanhar os seus pacientes?</p>
            </div>
             
            <div className="container-pesquisa">
                <input className="pesquisa-paciente" type="search" name="" id="" placeholder="Digite o nome do paciente" />
                <Image url={Lupa} alt=""/>
            </div>

            <div className="container-tabela">
                <h1>Dados do Paciente</h1>
                <table className="table-dados-pesquisar">
                    <tbody>
                        <th className="item-titulo-tabela">Nome Completo</th>
                        <th className="item-dado-tabela">Parametro aqui</th>
                    </tbody>
                    <tbody>
                        <th  className="item-titulo-tabela">CPF</th>
                        <th  className="item-dado-tabela">Parametro aqui</th>
                    </tbody>
                    <tbody>
                        <th  className="item-titulo-tabela">ID Paciente</th>
                        <th  className="item-dado-tabela">Parametro aqui</th>
                    </tbody>
                    <tbody>
                        <th  className="item-titulo-tabela">Data de Aniversário</th>
                        <th  className="item-dado-tabela">Parametro aqui</th>
                    </tbody>
                </table>
            </div>
            <div className="container-button">
                <button className="btn-adicionar">
                    NOVA MEDICAÇÃO
                    <Image src={Adicionar} alt=""/>
                    </button>
            </div>
        </section>
        
        </>
    )

}
