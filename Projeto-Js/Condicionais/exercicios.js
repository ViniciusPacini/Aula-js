//Peça a cor do semáforo (`"verde"`, `"amarelo", `"vermelho"`) e diga a ação.

/*const semaforo = prompt("Qual cor está o semáforo?");

if (semaforo === "verde") {
    console.log("Siga em frente"); 
} else if (semaforo === "amarelo") {
    console.log("Atenção");
} else if (semaforo === "vermelho") {
    console.log("Pare");
} else {
    console.log("Cor inválida");
}*/

// 0-100 --> <60 reprovado, 60-79 recupeção, 80-100 aprovado

/*const nota = Number(prompt("Digite sua nota:"));

if (nota < 60) {
    console.log("Infelizmente você foi reprovado.");
} else if (nota >= 60 && nota <= 79) {
    console.log("Você está de recuperação, boa sorte!");
} else if (nota >= 80 && nota <= 100) {
    console.log("Parabéns, você foi aprovado.");
} else if (Number.isNaN(nota) || nota < 0 || nota < 60) {
    console.log("Nota inválida")
}*/

/*Login com && e ||
Acesso liberado se (usuário é `admin` OU `gerente`) E senha é `1234`.
**Exemplo:** `admin` e `1234` → `Acesso liberado` · `admin` e `0000` → `Acesso negado`*/

/*const user = prompt("Usuário:");
const pass = prompt("Senha:");

const perfilOk = (user === "admin" || user === "gerente");
const senhaOk = (pass === "1234")

if (perfilOk && senhaOk) {
    console.log("acesso liberado");
} else {
    console.log("Acesso negado");
}*/

/*Peça um número e diga se é positivo, negativo ou zero.

**Exemplo:** `5` → `O número é positivo.` · `0` → `O número é zero.` · `abc` → `Valor inválido.`*/

/*const numero = Number(prompt("Digite um número:"));

if (Number.isNaN(numero)) {
    console.log("Valor inválido.");
} else if (numero === 0) {
    console.log("O número é zero.");
} else if (numero >= 1) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.")
}*/

/*Se a idade for >= 18, mostrar que pode tirar carteira; senão, que ainda não pode.

**Exemplo:** `20` → `Você pode tirar a carteira de motorista.` · `15` → `Você ainda não tem idade para dirigir.` · `abc` → `Idade inválida.`*/

/*const idade =Number(prompt("Qual é a sua idade?"));

if (Number.isNaN(idade)) {
    console.log("Idade inválida.");
} else if (idade >= 18) {
    console.log("Você pode tirar a carteira de motorista.");
} else if (idade < 18) {
    console.log("Você ainda não tem idade para dirigir.");
}*/

/*Use o resto da divisão (`%`) para dizer se um número é par ou ímpar.

**Exemplo:** `10` → `O número é par.` · `7` → `O número é ímpar.` · `abc` → `Número inválido.`*/

/*const numero = Number(prompt("DIgite um número:"));

if (Number.isNaN(numero)) {
    console.log("Número Inválido.")
} else if (numero % 2 === 0) {
    console.log("O número é par.")
} else {
    console.log("O número é impar.")
}*/

/*Peça peso e altura, calcule o IMC e classifique: 
<18.5 abaixo do peso, 18.5–24.9 normal, 25–29.9 sobrepeso, 
>=30 obesidade. Valide entradas inválidas.

**Exemplo:** peso `70` e altura `1.75` → `Seu IMC é: 22.86` e `Classificação: Peso normal`*/

/*const peso = Number(prompt("Qual é o seu peso? (kg)"));
const altura = Number(prompt("Qual é a sua altura? (m)"));


if (Number.isNaN(peso) || Number.isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("Valores de peso ou altura inválidos.");
} else {
    const imc = peso / (altura ** 2);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if ( imc < 18.5) {
    console.log("Classificação: Abaixo do peso.");
} else if (imc < 25)  {
    console.log("Classificação: Peso normal.");
} else if (imc < 30) {
    console.log("Classificação: Sobrepeso.");
 } else {
    console.log("Classificação: Obesidade.");
 }
}*/

/*Se o valor da compra for maior que R$ 100, aplicar 10% de desconto.

**Exemplo:** `150` → `Valor final com desconto: R$ 135` · `80` → `Valor final: R$ 80`*/

/*const valor = Number(prompt("Digite o valor da sua compra:"));

if (Number.isNaN(valor) || valor < 0) {
    console.log("Valor inválido.")
} else if (valor > 100) {
    const desconto = valor * 0.1;
    console.log("Valor final com desconto: " + valor - desconto);
} else {
    console.log("Valor final: R$ " + valor)
}*/

/* Peça 3 números e diga qual é o maior.

**Exemplo:** `4`, `9` e `7` → `O maior número é: 9`*/

const numero1 = Number(prompt("Digite o primeiro valor:"));
const numero2 = Number(prompt("Digite o segundo valor:"));
const numero3 = Number(prompt("Digite o terceiro valor:"));

if (Number.isNaN(numero1) || Number.isNaN(numero2) || Number.isNaN(numero3) ) {
    console.log("Número inválido, por favor digite outro número.");
} else {
    let maior = numero1;
    if (numero2 > maior) maior = numero2; 
    if (numero3 > maior) maior = numero3 
        console.log("O maior número é:" + maior)
}
