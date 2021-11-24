// function escolhaopcaoLet(){
//     var pergunta =(prompt('1-Entre na biblioteca e investiga o barulho.\n 2-Segue seu caminho em procura de sua irmã.'))
//     while (true){
// if(pergunta ==1){
//     window.location.href ='../GameOver/gameover.html'
// }
// else{
//     window.location.href ='./fase2.html'
//     }
//   }
// }

// function escolhaopcaoLet(){
//     var pergunta = (prompt ('1 - da a volta pelo lado de fora e acaba morrendo por vampiros.\n2 -Subir a escada.'))
//     while (true){
//     if(pergunta == 2){
//     window.location.href = './fase3.html'
// }else{
//     window.location.href = '../GameOver/gameover.html'
//     }
//   }
// }

// function escolhaopcaoLet(){
//     var pergunta = (prompt ('1-Ser não for luzi, não entre..\n 2-Ser for sarah, entre e salve ela..'))
//     while (true){
//     if(pergunta == 2){
//     alert('Parabéns você conseguiu e agora está mais perto de salvar Luzi')
//     window.location.href = '.fase3.html'
// }
// else{
//     window.location.href ='../GameOver/gameover.html'
//     }
//   }
// }

function escolhaopcaoLet1(){ 
 
  var opcao = prompt('1-Entre na biblioteca e investiga o barulho.\n 2-Segue seu caminho em procura de sua irmã.') 
   
  while(opcao != 1 && opcao != 2){ 
  alert('Opção invalida') 
   
  opcao = prompt('1-Entre na biblioteca e investiga o barulho.\n 2-Segue seu caminho em procura de sua irmã.') 
   
  } 
   
  if(opcao == 1){ 
   
  return location = '../GameOver/gameover.html' 
   
  } else if(opcao == 2){ 
   
  return location = '../fase2.html' 
   
  } else { 
  escolhaopcaoVan3() 
  } 
}

function escolhaopcaoLet2(){ 
 
  var opcao = prompt('1 - da a volta pelo lado de fora e acaba morrendo por vampiros.\n2 -Subir a escada.') 
   
  while(opcao != 1 && opcao != 2){ 
  alert('Opção invalida') 
   
  opcao = prompt('1 - da a volta pelo lado de fora e acaba morrendo por vampiros.\n2 -Subir a escada.') 
   
  } 
   
  if(opcao == 1){ 
   
  return location = '../fase3.html' 
   
  } else if(opcao == 2){ 
   
  return location = '../GameOver/gameover.html' 
   
  } else { 
  escolhaopcaoLet2() 
  } 
}

function escolhaopcaoVan3(){ 
 
  var opcao = prompt('winner chick') 
   
  while(opcao != 1 && opcao != 2){ 
  alert('Opção invalida') 
   
  opcao = prompt() 
   
  } 
   
  if(opcao == 1){ 
   
  return location = '../pagFinal/final.html' 
   
  } else if(opcao == 2){ 
   
  return location = '../GameOver/gameover.html' 
   
  } else { 
  escolhaopcaoVan3() 
  } 
}