const nota1 = 7.5;
const nota2 = 9.3;
const nota3 = 9.4;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log("Aluno reprovado, sua média é " + media.toFixed(1));
} else if (media >= 5 && media <= 7) {
    console.log("Aluno em recuperação, sua média é " + media.toFixed(1));
} else {
    console.log("Aluno aprovado, sua média é " + media.toFixed(1));
}