let Num1 = Number(prompt("Cual de los tres es mayor\n Digite el numero 1"));
let Num2 = Number(prompt("Digite el numero 2"));
let Num3 = Number(prompt("Digite el numero 3"));

if (Num1 > Num2 && Num1 > Num3){
    document.write("El numero mayor es: " ,Num1);
} else if (Num2 > Num1 && Num2 > Num3) {
    document.write("El numero mayor es: " ,Num2);
} else {
    document.write("El numero mayor es: " ,Num3);
}