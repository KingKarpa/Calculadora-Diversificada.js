let prg = document.getElementById("seq");
let inp = document.getElementById("in");
let pes = document.getElementById("peso");
let btn = document.getElementById("bot");
let cal = document.getElementById("start");
let res = document.getElementById("resul");

let seqA = [];
let peso = [];
let media = 0;
let seqB = [];
let varia = 0;
let desviop = 0;
let termos = [];
let con = 0;
let medpeso = 0;
let produtos = [];

let total = 0;
let subV = 0;

function termoAritm(){
    let term = `${peso[con]}(${seqA[con]})`;
    termos.push(term);
    con++;
     // console.log(termos);
     // console.log(con);
}
function pushA(){
    seqA.push(Number(inp.value));
    if (pes.value == ""){
        peso.push(1);
    } else{
        peso.push(Number(pes.value));
    }
    termoAritm();
    prg.innerHTML = termos;
    console.log(seqA);
    console.log(peso);
}

function resuldado(){
    for (i = 0; i < produtos.length; i++){
    let p = document.createElement("p");
    res.appendChild(p);
    p.appendChild(document.createTextNode(produtos[i]));
    }
    res.innerHTML += (`A sub-sequência de desvios simples é ${seqB}`);
}
function calcDP(){

    // Calcular a média
    for (i = 0; i < seqA.length; i++){
        let num = seqA[i] * peso[i];
        console.log(num);
        total += num;
        medpeso += peso[i];
    }
    console.log("soma do peso = " + medpeso);
    console.log("valor total da seqA = " + total);
    media = total / medpeso;
    produtos.push(`A média da sequência é aproximadamente = ${media.toFixed(2)}`);

    // Calcular o desvio simples
    for (i = 0; i < seqA.length; i++){
        let ds = seqA[i] - media;
        // if (ds < 0){
        //     ds * -1;
        // }
        seqB.push(ds);
    }

    // Calcular a variância
    for (i = 0; i <seqB.length; i++){
        let qua = seqB[i]; 
        subV += (seqB[i] * qua) * peso[i];
    }

    varia = subV / medpeso;
    produtos.push(`A variância da sequência é aproximadamente = ${varia.toFixed(2)}`);
    console.log("media = " + media);
    console.log("desvios Simples = " + seqB);
    console.log ("variancia = " + varia);
    desviop = Math.sqrt(varia);
    console.log(desviop);
    produtos.push(`O desvio padrão da sequência é aproximadamente = ${desviop.toFixed(2)}`);
    resuldado();
}


