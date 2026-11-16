
// Problema 1: Suma de tres valores ingresados por campos distintos
function sumarTresValores() {
    let v1 = parseFloat(document.getElementById('p1_v1').value);
    let v2 = parseFloat(document.getElementById('p1_v2').value);
    let v3 = parseFloat(document.getElementById('p1_v3').value);

    // Validar que los campos no estén vacíos o no sean números válidos
    if (isNaN(v1) || isNaN(v2) || isNaN(v3)) {
        document.getElementById('p1_res').innerText = "Por favor, complete todos los campos numéricos.";
        return;
    }

    let suma = v1 + v2 + v3;
    document.getElementById('p1_res').innerText = `La suma de los valores ingresados es: ${suma}`;
}

// Problema 2: Calcular el cuadrado de un número ingresado
function calcularCuadrado() {
    let num = parseFloat(document.getElementById('p2_num').value);

    if (isNaN(num)) {
        document.getElementById('p2_res').innerText = "Por favor, ingrese un número válido.";
        return;
    }

    let cuadrado = num * num;
    document.getElementById('p2_res').innerText = `El cuadrado de ${num} es: ${cuadrado}`;
}

// Problema 3: Calcular el promedio de 3 calificaciones de un estudiante
function calcularPromedio() {
    let nombre = document.getElementById('p3_nombre').value.trim();
    let n1 = parseFloat(document.getElementById('p3_n1').value);
    let n2 = parseFloat(document.getElementById('p3_n2').value);
    let n3 = parseFloat(document.getElementById('p3_n3').value);

    if (nombre === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        document.getElementById('p3_res').innerText = "Por favor, ingrese el nombre y las tres calificaciones.";
        return;
    }

    let promedio = (n1 + n2 + n3) / 3;
    document.getElementById('p3_res').innerText = `El promedio de ${nombre} es: ${promedio.toFixed(2)} puntos`;
}

// Problema 4: Conversión de unidades de metros a centímetros y kilómetros
function convertirMetros() {
    let metros = parseFloat(document.getElementById('p4_metros').value);

    if (isNaN(metros)) {
        document.getElementById('p4_res').innerText = "Por favor, ingrese un valor válido en metros.";
        return;
    }

    let centimetros = metros * 100;
    let kilometros = metros / 1000;

    let cmFormatted = centimetros.toLocaleString('es-ES');
    document.getElementById('p4_res').innerText = `${metros} metros equivalen a ${cmFormatted} centímetros y ${kilometros} kilómetros.`;
}

// Problema 5: Comparación de dos valores (mayor, menor y su diferencia)
function compararValores() {
    let a = parseFloat(document.getElementById('p5_a').value);
    let b = parseFloat(document.getElementById('p5_b').value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById('p5_res').innerText = "Por favor, ingrese ambos números.";
        return;
    }

    let mayor, menor;
    if (a > b) {
        mayor = a;
        menor = b;
    } else if (b > a) {
        mayor = b;
        menor = a;
    } else {
        document.getElementById('p5_res').innerText = `Ambos números son iguales (${a}), por lo que no hay diferencia.`;
        return;
    }

    let diferencia = mayor - menor;
    document.getElementById('p5_res').innerText = `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
}