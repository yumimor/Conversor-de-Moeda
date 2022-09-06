function Converter() {
var valorElemento = document.getElementById("valor");
var valor = valorElemento.value;
var valorEmDólarNumerico = parseFloat(valor);
//Converter Dólar em Real
var valorEmReal = valorEmDólarNumerico * 5.24;
console.log(valorEmReal);


var elementoValorConvertido = document.getElementById("valorConvertido");
var valorConvertido = " O resultado em real é R$ " + valorEmReal;
elementoValorConvertido.innerHTML = valorConvertido;

}

//Converter Euro em Real
function ConverterEmEuro() {

    var valorElemento2 = document.getElementById("valor2");
var valor2 = valorElemento2.value;
var valorEmEuroNumerico = parseFloat(valor2);
var euroEmReal = valorEmEuroNumerico * 5.19;
console.log(euroEmReal);

var elementoConversorEuro = document.getElementById("euroConvertido");
var euroConvertido = "O resultado em Real é R$ " + euroEmReal;
elementoConversorEuro.innerHTML = euroConvertido;
}