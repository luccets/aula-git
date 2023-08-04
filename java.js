function mudar(){

    let novo = document.getElementById("idNome")

    document.getElementById("titulo").required = true;
    document.getElementById("titulo"). innerHTML = novo.value;
};
function inserir (){
    let numero = document.getElementById("posicao").value -1;
    let novo = document.getElementById("novo").value

    document.getElementsByClassName("colocado")[numero].innerHTML = novo

}