var opcao = prompt("1 -Sarah enfrenta esses vampiros\n2 -Sarah olha para uma porta e entra nela." )
function escolhaaopcao(){
    while (true){
        if(opcao == 1){
            window.location.href="../gamerover.html"
            break;
        }else if(opcao == 2){
            window.location.href="./fase1.html"
            break;
        }else{
            alert("escolha 1 ou 2")
            var opcao = prompt ("1 -Sarah enfrenta esses vampiros\n2 -Sarah olha para uma porta e entra nela.")
        }
    }
}
