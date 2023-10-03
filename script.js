// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre
//'claro' senão mostre está 'de noite'
var dia;

if (dia) {
    console.log('Está claro');
} else {
    console.log('Está de noite');
}

//02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()

for (let pares = 2; pares <= 20; pares += 2) {
    console.log(pares);
}

//03 - crie uma função que exiba uma mensagem no console
function exibirMensagem() {
    console.log("Esta é a minha mensagem no console.");
}

// Para chamar a função e exibir a mensagem no console:
exibirMensagem();

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome(nome) {
    console.log(nome);
}

// Para chamar a função e exibir o nome "Leticia" no console:
exibirNome("Leticia");

//05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function exibirInformacoes(nome, idade, estiloMusical) {
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo Musical Preferido: " + estiloMusical);
}
// Para chamar a função e exibir as informações no console:
exibirInformacoes("Leticia", 22, "Rock");

//06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function exibirInfo(filme, musica){
    console.log("Filme: " + filme);
    console.log("Musica: " + musica);
}
exibirInfo("A Pedra filosofal", "Melhor Versão GM");
//07 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triploDoNumero(numero) {
    return numero * 3;
}

console.log(triploDoNumero(3));
//08 - crie uma função que  verifique se uma  variável é true ou false
function verificarBooleano(valor) {
    if (valor === true || valor === false) {
        return true;
    } else {
        return false;
    }
}
console.log(verificarBooleano(true)); 

//09 - Crie um array que receba 5 itens e exiba no console.
var meuArray = [1, 2, 0, 3, 4];
console.log(meuArray);

//10 - Utilize um método para adicionar um nome ao inicio do array.
var meuArray = [12, 13, 14, 15];
meuArray.unshift(11);
console.log(meuArray);

//11 - Utilize um método para remover o último nome do array.
var meuArray = [11, 22, 33, 44, 55];
meuArray.pop();
console.log(meuArray);

//12 - Utilize um método para adicionar dois nomes ao fim do array.
var meuArray = [89,90, 91];
meuArray.push(92, 93);
console.log(meuArray);

//13 - Utilize um método para remover o primeiro nome do array.
var meuArray = [41, 42, 43, 44, 45];
meuArray.shift();
console.log(meuArray);

//14 - Utilize um método para organizar em ordem crescente o seguinte array:
 let numbers = [7,5,6,3,8,9,2,1,4]
 numbers.sort(function(a, b) {
     return a - b;
 });
 console.log(numbers);

//15 - Crie um objeto que receba ao menos três propriedades sobre você.
var meuPerfil = {
    nome: "Leticia",
    idade: 22,
    localizacao: "Descalvado - SP"
};
console.log(meuPerfil);

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
meuPerfil["profissao"] = "Desenvolvedora front end";
console.log(meuPerfil);


//17 - Remova uma propriedade desse objeto.
delete meuPerfil.localizacao;
console.log(meuPerfil);

//18 - Mostre no console todas as propriedades desse objeto.
var propriedades = Object.keys(meuPerfil);
console.log(propriedades);

//19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
//Na propriedade amigos, adicione ao menos 4 amigos.
var cadastro = [
    {
        nome: "Marcia",
        idade: 25,
        telefone: "123-456-7890",
        amigos: ["Leticia", "Carol", "David", "Maisa"]
    },
    {
        nome: "Raul",
        idade: 24,
        telefone: "987-654-3210",
        amigos: ["Fernanda", "Marcos", "Helen", "Igor"]
    },
    {
        nome: "Dyovanna",
        idade: 21,
        telefone: "555-555-5555",
        amigos: ["Maria", "Nathan", "Olivia", "Paulo"]
    },
    {
        nome: "Maria Eduarda",
        idade: 21,
        telefone: "222-333-4444",
        amigos: ["Sarah", "Gustavo", "Isabela", "Vera"]
    },
    {
        nome: "Augusto",
        idade: 21,
        telefone: "777-888-9999",
        amigos: ["Xavier", "Yara", "Rose", "Joao"]
    }
];

// 20 - Mostre no console o nome de um amigo de cada lista.
cadastro.forEach(function(pessoa) {
    console.log(pessoa.amigos[0]);// Isso mostrará o primeiro amigo de cada pessoa.

});



