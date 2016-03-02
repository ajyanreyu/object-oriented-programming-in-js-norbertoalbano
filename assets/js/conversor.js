(function(exports) {
  "use strict";

  function Medida(valor,tipo)
  {
    /* tipo es opcional. Debería admitir  new Medida("45.2 Km") */
    /* ademas de new Medida(45.2, "Km") */
    this.value = valor;
    this.type = tipo;

  }

  function Temperatura(valor,tipo)
  {
    /* tipo es opcional. Debería admitir new Medida("45.2 F") */
    Media.call(this, valor, tipo);
  }

  function Celsius(valor)
  {
    Temperatura.call(this, valor);
    this.toFarenheit = function(){
      return ((this.value * 9/5) + 32);
    }
    this.toKelvin = function(){
      return (this.value + 273.15));
    }
  }


  function Farenheit(valor)
  {
    this.toCelcius = function(){
      return (((this.value - 32) * 5)/9);
    }
    this.toKelvin = function(){
      return (((this.value + 459.67) * 5) / 9);
    }
  }

  

  exports.Temperatura = Temperatura;
  exports.Celsius = Celsius;
  exports.Farenheit = Farenheit;

  exports.convertir = function() {
    var valor     = document.getElementById('convert').value,
        elemento  = document.getElementById('converted'),
        /* Extienda la RegeExp a la especificación. use una XRegExp */
        regexp    = /^\s*([-+]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([a-z,A-Z]+)\s*$/i;
    valor     = valor.match(regexp);

    if (valor) {
      var numero = valor[1],
          tipo   = valor[2].toLowerCase();

      numero = parseFloat(numero);
      console.log("Valor: " + numero + ", Tipo: " + tipo);

      switch (tipo) {
        case 'c':
          var celsius = new Celsius(numero);
          elemento.innerHTML = celsius.toFarenheit().toFixed(2) + " Farenheit";
          break;
        case 'f':
          var farenheit = new Farenheit(numero);
          elemento.innerHTML = farenheit.toCelsius().toFixed(2) + " Celsius";
          break;

        default:
          /* rellene este código */
      }
    }
    else
      elemento.innerHTML = "";
  };
})(this);
