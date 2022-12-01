let Num1 = Number(prompt("Cual de estos numeros son positivos.....\n Digite el numero 1"));
let Num2 = Number(prompt("Digite el numero 2"));

if (Num1 >= 0 && Num2 >= 0) {
  document.write("Ambos números son positivos");
}
if (Num1 < 0 && Num2 < 0) {
    document.write("Ambos números son negativos");
}
if (Num1 >= 0 && Num2 < 0) {
    document.write("Solo el #1 (", Num1, ") es positivo");
}
if (Num1 < 0 && Num2 >= 0) {
    document.write("Solo el #2 (", Num2, ") es positivo");
}