function escolhaVan2(){ 
 
    var opcao = prompt(' 1- lutar contra eles?\n 2- Esperar por ajudar?') 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt(' 1- lutar contra eles?\n2- Esperar por ajudar?') 
     
    } 
     
    if(opcao == 1){ 
     
    return location = './fase3.html' 
     
    } else if(opcao == 2){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else { 
    escolhaVan2() 
    } 
}

function escolhaVan1(){ 
 
    var opcao = prompt('1-Van segue o caminho sozinha\n2 - Van luta contra o vampiro que tem a cura de sua irmã  e corre contra o tempo para salvá-la? ') 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt('1- Van segue o caminho sozinha\n2 - Van luta contra o vampiro que tem a cura de sua irmã  e corre contra o tempo para salvá-la? ') 
     
    } 
     
    if(opcao == 1){ 
     
    return location = './fase2.html' 
     
    } else if(opcao == 2){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else { 
    escolhaVan1() 
    } 
}


function escolhaVan3(){ 
 
        var opcao = prompt('1 - Você vai concorda com Let\n 2 - Van e Let encontram sua irmã Sarah no andar de cima.') 
         
        while(opcao != 1 && opcao != 2){ 
        alert('Opção invalida') 
         
        opcao = prompt('1 - Você vai concorda com Let  2- Van e Let encontram sua irmã Sarah no andar de cima.') 
         
        } 
         
        if(opcao == 2){ 
            alert('Parabéns voce conseguiu resgatar a Luzi')
        return location = '../pagFinal/final.html' 
         
        } else if(opcao == 1){ 
            alert('Voce não conseguiu abrir a porta, Luzi agora é uma vampira e sugou o sangue de quem ta lendo')
        return location = '../GameOver/gameover.html' 
        
        } else { 
        escolhaVan3() 
        } 
  }