function Calcula(){
var notaDoPrimeiroBimestre = Number(document.getElementById("nota1").value);
var notaDoSegundoBimestre = Number(document.getElementById("nota2").value);
var notaDoTerceiroBimestre = Number(document.getElementById("nota3").value);
var notaDoQuartoBimestre = Number(document.getElementById("nota4").value);
var media = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre)/4;
var mediaFixada = media.toFixed(1);
var situacao;
var emojiAprovado = document.innerText = String.fromCodePoint(0x1F601);
var emojiRecuperacao = document.innerText = String.fromCodePoint(0x1F928);
var emojiReprovado = document.innerText = String.fromCodePoint(0x1F622);
  
document.getElementById("resultado").innerHTML = "A média foi " + mediaFixada + ".";

  if (mediaFixada >= 7) {
  situacao = "Parabéns! Você está aprovadíssimo!" + emojiAprovado;
}
else if (mediaFixada < 7 && mediaFixada >= 5) {
  situacao = "Xi... Você está em recuperação. Vamos estudar mais?" + emojiRecuperacao;
}

else if (mediaFixada < 5) {
  situacao = "Pôxa, não foi dessa vez... Você foi reprovado." + emojiReprovado;
}
  
document.getElementById("situacao").innerHTML = situacao;

}
//isso é um comentário
// variáveis, strings, console.log, toFixed, operações matemáticas, concatenação