let Num1 = Number(prompt("Es el numero: positivo, negativo o cero?\n Digite el numero a identificar"));

if (Num1 > 0){ 
    document.write("El numero ", Num1, " es positivo");
} else if (Num1 == 0){
    document.write("El numero ", Num1, " es igual a cero");
} else {
    document.write("El numero ", Num1, " es negativo");
}