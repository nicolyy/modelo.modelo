import Link from "next/link"
import Image from "next/image"

import React from 'react';



import "../../../../components/Styles/paciente-home.scss"

import Check from "../../../../../public/checkmark-circle-outline.svg"
import Relatorio from "../../../../../public/relatorio.png"
import Perfil from "../../../../../public/perfil.png"

import Calendario from "../../../../../public/calendario.png"
import Relogio from "../../../../../public/relogio.png"


export default function HomePaciente(){
    return(
        <>
        <section className="nav">
            <Image className="icon-nav"  url={Check} alt="Foto vector de tres listras representando um relatorio" />
            <nav>
                <ul>
                    <li>
                        <Link href="#">
                        <Image className="icon-nav"  src={Relatorio} alt="Foto vector de tres listras representando um relatorio" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <Image className="icon-nav"  src={Perfil} alt="Foto vector de tres listras representando um relatorio" />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                        <Image className="icon-nav" src={Check}  alt="Foto Vector de uma pessoa representando usuario" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>

        <section>
            <div className="home-paciente-capa">
                <div className="conteudo-home-paciente">
                    <h1>Hora do Remedinho!</h1>
                    <p className="fonte-subtitulo">Bem-vindo de Volta!</p>
                    <div className="data-hora">
                        <div className="data-hora-item">
                            <Image src={Calendario} alt="icone de um calendario" />
                            <p>16 / 11 / 2023</p>
                        </div>
                        <div className="data-hora-item">
                            <Image src={Relogio} alt=""/>
                            <p>18 : 25</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alarme">
                <div className="alarme-item">
                    <p>09:00 Parecetemol</p>
                </div>
            </div>
        </section>
        </>
    )
}