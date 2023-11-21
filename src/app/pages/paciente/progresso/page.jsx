"use client";

import Link from "next/link"
import Image from "next/image"
import React, { useState, useEffect } from 'react';

import "../../../../components/Styles/paciente-progresso.scss"

export default function PacienteProgresso() {

    const [rangeValue, setRangeValue] = useState(0);

    useEffect(() => {
        const updateProgressBar = () => {
            const range = document.querySelector('#range');
            const progressbar = document.querySelector('.progress-bar');

            if (range && progressbar) {
                const value = range.value;
                const percent = (value / (range.max - range.min)) * 100;

                progressbar.style.width = `${percent}%`;
            }
        };

        const range = document.querySelector('#range');
        if (range) {
            range.addEventListener('input', updateProgressBar);
            range.addEventListener('change', updateProgressBar); // Adicionando um evento 'change' para atualizar a barra de progresso quando o valor é alterado manualmente
        }

        return () => {
            if (range) {
                range.removeEventListener('input', updateProgressBar);
                range.removeEventListener('change', updateProgressBar);
            }
        };
    }, []);

    return (
        <>
            <section className="principal-progresso">
                <div className="container-progresso">
                    <h1>Meu Progresso</h1>
                    <p>Continue assim!</p>
                </div>
              
                <input
                    className="input-progress"
                    type="range"
                    min="1"
                    max="100"
                    step="5"
                    value={rangeValue}
                    id="range"
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                <div className="progress-bar"></div>
                
            </section>
        </>
    )
}