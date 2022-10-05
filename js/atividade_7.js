

let btnCalcular = document.getElementById('calcular');
let btnLimpar = document.getElementById('limpar');
let numero = document.getElementById('numero');
let arrValores = [];
let resultadoDiv = document.getElementById('resultado');

function limpar(){
    numero.value = '';
}

function recebeNumero(){
    let numeroRecebido = numero.value;
    arrValores.push(numeroRecebido);
    let arrayMultiplicado = arrValores.map(function(item){
        return item * 3;
    });

    resultadoDiv.innerHTML = arrayMultiplicado.join();

    console.log(arrValores);
    limpar();
    
}

function limpaCampos(){
    resultadoDiv.innerHTML = '';
    arrValores = [];
}


btnCalcular.addEventListener("click", recebeNumero);
btnLimpar.addEventListener("click", limpaCampos);
