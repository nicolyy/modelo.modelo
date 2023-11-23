
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

const filePath = process.cwd() + '/src/app/api/base/db.json';

export async function GET(request, { params }) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const id = parseInt(params.id, 10);
    
    if (id > 0) {
      const nome = data.usuarios.find(nome => nome.id === id);
      return nome ? NextResponse.json(nome) : NextResponse.json({ "status": "error", "message": "paciente não encontrado" });
    } else {
      return NextResponse.json(data.usuarios);
    }
  } catch (error) {
    return NextResponse.json({ "status": "error", "message": "Erro no servidor" });
  }
}

export async function POST(request, response) {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const data = JSON.parse(fileContent);

    const body = await request.json();

    for (let x = 0; x < data.usuarios.length; x++) {
      const nome = data.nome[x];
      if (nome.id === body.id) {
        return NextResponse.json({ "status": "ok", "message": "Paciente já registrado" });
      }
    }

    data.nomes.push(body);
    await fs.writeFile(filePath, JSON.stringify(data, null, 2));
    
    return NextResponse.json({ "status": "ok", "message": "Paciente registrado com sucesso" });
  } catch (error) {
    return NextResponse.json({ "status": "error", "message": "Erro no servidor" });
  }
}