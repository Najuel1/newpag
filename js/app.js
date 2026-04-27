var a = parseFloat(prompt("Ingrese su primer número (a)"));
var b = parseFloat(prompt("Ingrese su segundo número (b)"));

var op = prompt("Escoja una operación + - * / para a y b")

let res;

if (op == "+"){
    res=a+b;
}
else if (op == "-"){
    res=a-b
}
else if (op == "*"){
    res=a*b;
}
else if (op == "/"){
    res=a/b
}
else {
    alert("Opción no valida");
}

alert("El resutado de su operación es : "+ res);