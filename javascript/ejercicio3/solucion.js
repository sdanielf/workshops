function division () {
  var dividendo = parseInt(prompt("Dividendo"));
  if (isNaN(dividendo)) {
    alert('Valor ingresado inválido');
  } else {
    var divisor = parseInt(prompt("Divisor"));
    if (isNaN(divisor)) {
      alert('Valor ingresado inválido');
    } else if (divisor === 0){
      alert('No se puede dividir entre 0');
    } else {
      alert('Resultado: ' + (dividendo / divisor))
    }
  }
}
