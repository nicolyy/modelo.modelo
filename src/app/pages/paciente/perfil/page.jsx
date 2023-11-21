"use client"
import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"

import React from 'react';

import "../../../../components/Styles/paciente-perfil.scss"

export default function PacientePerfil() {

  const [nomes, setNomes] = useState([]);
  const [inputId, setInputId] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/pacientes/${inputId}`);

      if (!response.ok) {
        throw new Error(`Erro HTTP! Status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta não contém JSON válido");
      }

      const data = await response.json();

      if (Array.isArray(data)) {
        setNomes(data);
      } else if (typeof data === "object" && data !== null) {
        
        setNomes([data]);
      } else {
        console.error("Erro: Os dados não estão no formato esperado.");
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error.message);
    }
  };

  const handleInputChange = (event) => {
    setInputId(event.target.value);
  };

  const handleFetchData = () => {
    fetchData();
  };

    return(
        <section>
            <div className="container-foto-perfil">
                <Image className="" alt=""/>

            </div>
            <div className="dados">
                <table>
                    <thead>
                        <tr>
                            <td>Nome Completo</td>
                            <td>Telefone</td>
                            <td>CPF</td>
                            <td>Plano de Saude</td>
                        </tr>
                    </thead>
                    <tbody>
                   {nomes.map((item, indice) => (
                        <tr key={indice}>
                        <td>{item.nome}</td>
                        <td>{item.telefone}</td>
                        <td>{item.cpf}</td>
                        <td>{item.plano}</td>
                        
                        </tr>
                   ))}
                    </tbody>
                </table>

            </div>
        </section>
    )

}