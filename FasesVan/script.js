function escolhaVan2(){ 
 
    var opcao = prompt(' 1- lutar contra eles?\n 2- Esperar por ajudar?') 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt(' 1- lutar contra eles?\n2- Esperar por ajudar?') 
     
    } 
     
    if(opcao == 1){ 
     
    return location = '../fase3.html' 
     
    } else if(opcao == 2){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else { 
    escolhaVan2() 
    } 
}

function escolhaVan3(){ 
 
    var opcao = prompt(1 -'Van segue o caminho sozinha\n2 - Van luta contra o vampiro que tem a cura de sua irmã  e corre contra o tempo para salvá-la? ') 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt(1 -'Van segue o caminho sozinha\n2 - Van luta contra o vampiro que tem a cura de sua irmã  e corre contra o tempo para salvá-la? ') 
     
    } 
     
    if(opcao == 1){ 
     
    return location = '../fase3.html' 
     
    } else if(opcao == 2){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else { 
    escolhaVan3() 
    } 
}


function escolhaVan3(){ 
 
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
        escolhaVan3() 
        } 
  }