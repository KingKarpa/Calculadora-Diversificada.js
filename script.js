//Definições básicas
let librarys = document.getElementsByClassName("lib-container");

//Função que agrega evento de click ao carregar a página
window.onload = () => {
    for (let i = 0; i < librarys.length; i++){
        librarys[i].addEventListener('click', showMenu);
    }
}

//Funções responsáveis pelas animações de transição do CSS
//Transition não atende a mudança para "auto", por isto é usado maxHeight, apesar de apresentar delay no hideMenu
//Função que exibe a ul até então escondida
function showMenu(e){
    e = this;
    let ulLib = e.nextElementSibling;
    let pIndi = e.lastElementChild;
    ulLib.style.maxHeight = "500px";
    pIndi.innerHTML = "-";

    e.removeEventListener('click', showMenu);
    setTimeout(function(){
        e.addEventListener('click', hideMenu);
    }, 400);
}

//Função que esconde a ul em exibição
function hideMenu(e){
    e = this;
    let ulLib = e.nextElementSibling;
    let pIndi = e.lastElementChild;
    ulLib.style.maxHeight = "0";
    pIndi.innerHTML = "+";

    e.removeEventListener('click', hideMenu);
    setTimeout(function(){
        e.addEventListener('click', showMenu);
    }, 800);
}