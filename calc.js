

function inserir(num){
    let numero = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = numero + num;
}
function limpar(){
    document.getElementById("resultado").innerHTML = "";
}