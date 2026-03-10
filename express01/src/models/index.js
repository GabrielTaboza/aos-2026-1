const express = require('express');

const app = express();

const citacoes = [
{autor: "Albert Einstein", citacao: "A imaginação é mais importante que o conhecimento."},
{autor: "Isaac Newton", citacao: "Se vi mais longe foi por estar sobre ombros de gigantes."},
{autor: "Marie Curie", citacao: "Nada na vida deve ser temido, apenas compreendido."},
{autor: "Galileu Galilei", citacao: "Eppur si muove."},
{autor: "Charles Darwin", citacao: "Não é o mais forte que sobrevive, mas o que melhor se adapta."},
{autor: "Nikola Tesla", citacao: "Se você quiser encontrar os segredos do universo, pense em energia."},
{autor: "Stephen Hawking", citacao: "A inteligência é a habilidade de se adaptar às mudanças."},
{autor: "Carl Sagan", citacao: "Somos feitos de poeira das estrelas."},
{autor: "Richard Feynman", citacao: "Eu prefiro viver sem saber do que ter respostas que podem estar erradas."},
{autor: "Max Planck", citacao: "A ciência avança funeral por funeral."},
{autor: "Niels Bohr", citacao: "Prever é muito difícil, especialmente o futuro."},
{autor: "Werner Heisenberg", citacao: "O que observamos não é a natureza em si."},
{autor: "Louis Pasteur", citacao: "A sorte favorece a mente preparada."},
{autor: "Johannes Kepler", citacao: "A geometria é a linguagem de Deus."},
{autor: "Rosalind Franklin", citacao: "A ciência e a vida cotidiana não podem ser separadas."},
{autor: "Gregor Mendel", citacao: "A herança segue leis."},
{autor: "James Clerk Maxwell", citacao: "A verdadeira lógica deste mundo é o cálculo das probabilidades."},
{autor: "Alan Turing", citacao: "Podemos ver apenas um pouco do futuro."},
{autor: "Ada Lovelace", citacao: "A máquina analítica tece padrões algébricos."},
{autor: "Tim Berners-Lee", citacao: "A web é para todos."},
{autor: "Linus Torvalds", citacao: "Falar é barato. Mostre-me o código."},
{autor: "Dennis Ritchie", citacao: "Unix é simples. Só precisa de um gênio para entender sua simplicidade."},
{autor: "Donald Knuth", citacao: "Premature optimization is the root of all evil."},
{autor: "Grace Hopper", citacao: "A frase mais perigosa é: sempre fizemos assim."},
{autor: "Barbara Liskov", citacao: "Modularidade é a chave para sistemas complexos."},
{autor: "John von Neumann", citacao: "Não existe ciência sem matemática."},
{autor: "Blaise Pascal", citacao: "O coração tem razões que a própria razão desconhece."},
{autor: "Leonardo da Vinci", citacao: "A simplicidade é o último grau de sofisticação."},
{autor: "Aristóteles", citacao: "A dúvida é o princípio da sabedoria."},
{autor: "Plato", citacao: "A ciência é apenas percepção."}
];

app.get('/', (req, res) => {
res.send("API funcionando");
});

app.get('/random', (req, res) => {
const numero = Math.floor(Math.random() * 100) + 1;
res.send(numero.toString());
});

app.get('/dado', (req, res) => {
const numero = Math.floor(Math.random() * 6) + 1;
res.send(numero.toString());
});

app.get('/citacoes', (req, res) => {
const random = Math.floor(Math.random() * citacoes.length);
res.send(citacoes[random]);
});

module.exports = app;