let Num1 = Number(prompt("Division excepto que el segundo numero sea 0\n Digite el numero 1"));
let Num2 = Number(prompt("Digite el numero 2"));
let Division = Num1 / Num2
if (Num2 != 0) {
    document.write("La división es igual a ", Division)
} else {
    alert ("La división no es posible")
}
