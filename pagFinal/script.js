function escolhaopcaoVan3(){ 
 
    var opcao = prompt('Parabéns voce concluiu o jogo!!!!\nParabéns voce conseguiu resgatar a irmã Luzi') 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt('Parabéns voce concluiu o jogo!!!!\nParabéns voce conseguiu resgatar a irmã Luzia tempo') 
     
    } 
     
    if(opcao == 1){ 
     
    return location = '../pagFinal/final.html' 
     
    } else if(opcao == 2){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else { 
    escolhaopcaoVan3() 
    } 
  }