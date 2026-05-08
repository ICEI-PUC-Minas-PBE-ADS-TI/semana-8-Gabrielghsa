const catalogo = [
    {
        id: 21,
        titulo: "The Sopranos",
        tipo: "serie",
        ano: 1999,
        genero: ["Ficção Policial", "Drama", "Humor ácido", "Suspense"],
        nota: 10,
        assistido: true
    },
    {
        id: 13,
        titulo: "Breaking Bad",
        tipo: "Serie",
        ano: 2008,
        genero: ["Drama", "Suspense", "Crime"],
        nota: 10,
        assistido: true

    },
    {
        id: 31,
        titulo: "Pecadores",
        tipo: "filme",
        ano: 2025,
        genero: ["Terror", "Ação"],
        nota: 9,
        assistido: true

    },
    {
        id: 15,
        titulo: "O Senhor do Anéis: A Sociedade do Anel",
        tipo: "filme",
        ano: 2001,
        genero: ["Fantasia", "Aventura"],
        nota: 10,
        assistido: true

    },
    {
        id: 25,
        titulo: "Batman: O Cavaleiro das Trevas",
        tipo: "filme",
        ano: 2008,
        genero: ["Ação", "Crime"],
        nota: 10,
        assistido: true

    },
    {
        id: 31,
        titulo: "Stranger Things",
        tipo: "serie",
        ano: 2016,
        genero: ["Terror"],
        nota: 0,
        assistido: false

    }
]
console.log(catalogo[0].titulo);
console.log(catalogo[5].ano);
console.log(catalogo[2].genero[1]);

console.log("---------------------------");

catalogo.forEach(catalagoAtual => {
    console.log(catalagoAtual.titulo);
});

console.log("---------------------------")

catalogo.forEach(catalogoAtual => {
    console.log(catalogoAtual.tipo, catalogoAtual.titulo, catalogoAtual.ano);
});
console.log("---------------------------");

const titulosEmCaixaAlta = catalogo.map(item => {
    return item.titulo.toUpperCase();
})
console.log(titulosEmCaixaAlta);

const naoAssistidos = catalogo.filter(iten => {
    return iten.assistido === false;
}).length
console.log("Quantidade de itens não assistidos" + ": " + naoAssistidos);

console.log("---------------------------");

const encontrado = catalogo.find(item => {
    return item.nota > 9;
})
if (encontrado) {
    console.log(encontrado.titulo);
} else {
    console.log("Não existe item com nota acima de 9");
}
console.log("---------------------------");

const soma = catalogo.reduce((valorAcumulado, item) => {
    return valorAcumulado + item.nota;
}, 0)
const media = soma / catalogo.length;
console.log(media.toFixed(2));

const assistidos = catalogo.filter(iten => {
    return iten.assistido === true;
})

const somaAssistidos = catalogo.reduce((somando, item) => {
    return somando + item.nota;
}, 0)
const mediaAssistidos = somaAssistidos / assistidos.length
console.log(mediaAssistidos.toFixed(2));

console.log("---------------------------");

const ano2000 = catalogo.some((item) => {
    return item.ano < 2000;
})
if (ano2000) {
    console.log("Existe itens com ano menor que 2000!");
} else {
    console.log("Não existem itens com ano < que 2000!");
}

const qtdGenero = catalogo.every(item => {
    return item.genero.length === 1;
})

if (qtdGenero) {
    console.log("Todos os itens possuem apenas um gênero!");
} else {
    console.log("Alguns itens possuem mais de um gênero!");
}
console.log("---------------------------");

const output = document.getElementById("output");const filmes = catalogo.filter(item => {
    return item.tipo.toLowerCase() === "filme";
}).length;

const series = catalogo.filter(item => {
    return item.tipo.toLowerCase() === "serie";
}).length;

const ranking = [...catalogo]
    .sort((a, b) => {
        return b.nota - a.nota;
    })
    .slice(0, 3);

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p>Total de itens: ${catalogo.length}</p>
    <p>Total de filmes: ${filmes}</p>
    <p>Total de séries: ${series}</p>
    <p>Não assistidos: ${naoAssistidos}</p>
    <p>Média geral das notas: ${media.toFixed(2)}</p>
    <p>Média dos assistidos: ${mediaAssistidos.toFixed(2)}</p>
    <h3>Top 3 Maiores Notas</h3>

    <ol>
        ${ranking.map(item => `
            <li>
                ${item.titulo} - Nota ${item.nota}
            </li>
        `).join("")}
    </ol>
`;