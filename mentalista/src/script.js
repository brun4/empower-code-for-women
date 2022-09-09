var numeroSecreto = parseInt(Math.random() * 11);
var numeroTentativas = 3;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou";
    numeroTentativas = numeroTentativas - 1;
    while (chute != numeroSecreto) {
      if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "Tente um número menor";
      } else {
        elementoResultado.innerHTML = "Tente um número maior";
      }
      break;
    }
  }

  if (numeroTentativas == 0) {
    elementoResultado.innerHTML = `Que pena!<br>Acabaram suas tentativas...<br>O número secreto era ${numeroSecreto}.`;
  }
}
