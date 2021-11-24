// function escolhaopcaoSarah1(){
//     var opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã." )
//   //  while (true){
//         if(opcao == 1){
//             window.location.href="../GameOver/gameover.html"
        
//         }else if(opcao == 2){
//             window.location.assign ("fase2.html")
//             break;
//         }else{
//             alert("escolha 1 ou 2")
//              opcao = prompt ("1 -Sarah enfrenta esses vampiros\n2 -Sarah olha para uma porta e entra nela.")
//         }
//     }
// }
function escolhaopcaoSarah1(){ 
 
    var opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã.") 
     
    while(opcao != 1 && opcao != 2){ 
    alert('Opção invalida') 
     
    opcao = prompt("1-Sarah entra na biblioteca e tem uma surpresa.\n2-Sarah ignora e segue seu caminho de encontro a irmã.") 
     
    } 
     
    if(opcao == 1){ 
     
    return location = '../GameOver/gameover.html' 
     
    } else if(opcao == 2){ 
     
    return location = './fase2.html' 
     
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
     
    return location = '../GameOver/gameover.html' 
     
    } else if(opcao == 2){ 
     
    return location = './fase2.html' 
     
    } else { 
    escolhaopcaoSarah1() 
    } 
    }




function escolhaopcaoSarah3(){
    window.location.assign()
 }
