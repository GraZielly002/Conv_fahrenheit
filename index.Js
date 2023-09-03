function converter() {
    var valorCelsius = parseFloat(document.getElementById("valor").value);
    var calculo = (valorCelsius - 32) * 0.5556;
    
    document.getElementById('resultado').innerHTML = calculo.toFixed(0);
}