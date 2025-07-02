const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 4 },
    { nome: "Eduarda", nota: 9 },
    { nome: "Daniel", nota: 6 }
];

function filtrarAprovados(listaDeAlunos) {
    return listaDeAlunos.filter(aluno => aluno.nota >= 6);
}

console.log(filtrarAprovados(alunos));

// no terminal executar o comando "node main.js"
