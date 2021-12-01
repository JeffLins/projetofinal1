function escolhaLet1(){ 
 
  var opcao = prompt('1-Entre na biblioteca e investiga o barulho.\n 2-Segue seu caminho em procura de sua irmã.') 
   
  while(opcao != 1 && opcao != 2){ 
  alert('Opção invalida') 
   
  opcao = prompt('1-Entre na biblioteca e investiga o barulho.\n 2-Segue seu caminho em procura de sua irmã.') 
   
  } 
   
  if(opcao == 1){ 
   
  return location = '../GameOver/gameover.html' 
   
  } else if(opcao == 2){ 
   
  return location = './fase2.html' 
   
  } else { 
  escolhaLet1() 
  } 
}

function escolhaLet2(){ 
 
  var opcao = prompt('1 - da a volta pelo lado de fora e acaba morrendo por vampiros.\n2 -Subir a escada.') 
   
  while(opcao != 1 && opcao != 2){ 
  alert('Opção invalida') 
   
  opcao = prompt('1 - da a volta pelo lado de fora e acaba morrendo por vampiros.\n2 -Subir a escada.') 
   
  } 
   
  if(opcao == 1){ 
   
  return location = './fase3.html' 
   
  } else if(opcao == 2){ 
   
  return location = '../GameOver/gameover.html' 
   
  } else { 
  escolhaLet2() 
  } 
}

function escolhaLet3(){ 
 
  var opcao = prompt('1 - primeira porta\n 2- segunda porta') 
   
  while(opcao != 1 && opcao != 2){ 
  alert('Opção invalida') 
   
  opcao = prompt('1 - primeira porta\n 2- segunda porta') 
   
  } 
   
  if(opcao == 2){ 
    alert('Parabéns voce conseguiu resgatar a Luzi')
  return location = '../pagFinal/final.html' 
   
  } else if(opcao == 1){ 
    alert('Voce não conseguiu abrir a porta, Luzi agora é uma vampira e sugou o sangue de quem ta lendo')
  return location = '../GameOver/gameover.html' 
   
  } else { 
  escolhaLet3() 
  } 
}