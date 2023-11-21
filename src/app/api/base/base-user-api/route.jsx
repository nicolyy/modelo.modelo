import { promises as fs } from "fs";
import { NextResponse } from "next/server";

//Recuperar o arquivo json.
const file = await fs.readFile(
  process.cwd() + "/src/app/api/base/db.json",
  "utf-8"
);

export async function GET(request, { params }) {
  return NextResponse.json(JSON.parse(file));
}

const handleLogin = async (cpf, senha) => {
  //PARSEANDO O ARQUIVO PARA O JSON NATIVO!!!
  const body = await JSON.parse(file);
  //Realizando a busca do usuário na base de dados e validando o login e retornando o usuário.
  const userValidado = await body.usuarios.find(
    (user) => user.cpf == cpf && user.senha == senha
  );

  if (!userValidado) {
    return false;
  } else {
    return userValidado;
  }
};

const handleCad = async (cpf, senha, nome) => {
    //PARSEANDO O ARQUIVO PARA O JSON NATIVO!!!
    const body = await JSON.parse(file);
    
    //Realizando a busca do último ID cadastrado.
    const lastId = await body.usuarios[body.usuarios.length - 1].id;
    //Criando o novo usuário.
    const newUser = {
        "id": (lastId + 1),
        "nome": nome,
        "cpf": cpf,
        "senha": senha,
    };

    //Adicionando o novo usuário na base de dados.
    body.usuarios.push(newUser);

    //Adicionando o novo usuário na base de dados.
    await fs.writeFile(process.cwd() + "/src/app/api/base/db.json", JSON.stringify(body));
    //Retornando o novo usuário.
    return newUser;
}

export async function POST(request, response) {
  const {info,nome, cpf, senha } = await request.json();

  if (info == "login") {
    //Chamando a função de validação do login.
    const userValidado = await handleLogin(cpf, senha);
    if (!userValidado) {
      return NextResponse.json({ status: false});
    }else{
      return NextResponse.json({ status: true, user: userValidado });
    }
  }else if (info == "cad") {
    //Chamando a função de cadastro do usuário.
    const newUser = await handleCad(cpf, senha, nome);
    if (!newUser) {
      return NextResponse.json({ status: false });
    }else{
      return NextResponse.json({ status: true, user: newUser });
    }
  }
  
}