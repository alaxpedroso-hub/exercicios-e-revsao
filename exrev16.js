//Criar um programa para verificar se a temperatura quando menor que 15 graus é frio, entre 16 e 25 graus é ameno e acima é quente.
let temperatura = 20;
if (temperatura < 15) {
    console.log("A temperatura é fria.");
} else if (temperatura >= 16 && temperatura <= 25) {
    console.log("A temperatura é amena.");
} else {
    console.log("A temperatura é quente.");
}