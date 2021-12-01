function escolhaopcaoSarah2(){ 
 
    var opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã.") 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã.") 
     
    } 
     
    if(opcao == 1){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else if(opcao == 2){ 
     
    return location = './fase3.html' 
     
    } else { 
    escolhaopcaoSarah1() 
    } 
    }

// }
function escolhaopcaoSarah1(){ 
 
    var opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã.") 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã.") 
     
    } 
     
    if(opcao == 1){ 
        alert('Voce não conseguiu abrir a porta, Luzi agora é uma vampira e sugou o sangue de quem ta lendo')
    return location = '../GameOver/gameover.html' 
     
    } else if(opcao == 2){ 
        
    return location = './fase2.html' 
     
    } else { 
    escolhaopcaoSarah1() 
    } 
    }




function escolhaopcaoSarah3(){
    var opcao = prompt('1 -subir o corredor que da acesso a diretoria.\n 2 - elas vão pelo corredor e enfrentam os vampiros.') 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt('1 -subir o corredor que da acesso a diretoria.\n 2 - elas vão pelo corredor e enfrentam os vampiros.') 
     
    } 
     
    if(opcao == 1){ 
        alert('Voce não conseguiu abrir a porta, Luzi agora é uma vampira e sugou o sangue de quem ta lendo')
    return location = '../GameOver/gameover.html' 
     
    } else if(opcao == 2){ 
        alert('Parabéns voce conseguiu resgatar a Luzi')
    return location = '../pagFinal/final.html' 
     
    } else { 
  }
}
