"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import "../../components/Styles/login-paciente.scss"


export default function LoginUsers() {
  //Mensage de STATUS!
  const [msg, setMsg] = useState("");

  //Redirecionamento:
  const navigate = useRouter();
 
  const [usuario, setUsuario] = useState({
    info: "login",
    cpf: "",
    senha: "",
  });

  //Preenchimento dos Campos!
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario({ ...usuario, [name]: value });
  };

  //Envio das informações
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/base/base-user-api",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        
        const result = await response.json();
          console.log("VALIDADO!!!!");
        if (result.status) {
            
                     //Gerando o TOKEN de acesso!
          const token = Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2);

          //Armazenando o TOKEN no SessionStorage!
          sessionStorage.setItem("token-user", token);

          //Armazenando o objeto USUÁRIO no SessionStorage!
          sessionStorage.setItem("user-info", JSON.stringify(result.user));

            setMsg("Login efetuado com Sucesso!!");
            setTimeout(()=>{
                setMsg("");
                //Redirecionando para a página HOME!
                window.location.href = "/pages/profissional/home";
            },5000);

        }else{
            
            setMsg("Login ou Senha incorretos!");
            setTimeout(()=>{
                setMsg("");
            },5000);

        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-login">
      <div className="container-titulo">
        <h1 className="titulo-login">Login</h1>
      </div>
      <div className="login">
        <h1>Bem-vindo de volta!</h1>
        <p>Informe os seus dados para acessar seu alarme</p>
          <h2 className={msg == "Login efetuado com Sucesso!!" ? "msg-success-login":"msg-error-login"}>{msg}</h2>

        <div className="form-login">
          <form onSubmit={handleSubmit}>
            
              <div className="cpf-input">
                <label htmlFor="idCPF">CPF</label>
                <input
                  type="cpf"
                  name="cpf"
                  id="idCPF"
                  placeholder="CPF"
                  value={usuario.email}
                  onChange={handleChange}
                />
              </div>
              <div className="senha-input">
                <label htmlFor="idSenha">Senha:</label>
                <input
                  type="password"
                  name="senha"
                  id="idSenha"
                  placeholder="Senha de acesso"
                  value={usuario.senha}
                  onChange={handleChange}
                />
              </div>
              <div className="container-button-login">
                <button>ACESSAR</button>
              </div>
              <div className="login-texto p-5 m-auto w-2/4">
                <p>Se você não é cadastrado em nosso sistema, entre em contato com o Hospital que você trabalha</p>
              </div>
    
          </form>
          </div>
      </div>
    </div>
  );
}