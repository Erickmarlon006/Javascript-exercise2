var numEleitores = document.getElementById("num-eleitores");
var votosValidos = document.getElementById("votos-validos");
var votosBrancos = document.getElementById("votos-brancos");
var votosNulos = document.getElementById("votos-nulos");
var formulario = document.getElementById("eleições");

formulario.onsubmit = function(){
    if (parseInt(votosValidos.value) > parseInt(numEleitores.value) || parseInt(votosBrancos.value) > parseInt(numEleitores.value) || parseInt(votosNulos.value) > parseInt(numEleitores.value) ){
        alert("Por favor, coloque números reais !");
    }else{
        let percentVtVal = votosValidos.value / (numEleitores.value/100);
        let percentVtBrn = votosBrancos.value / (numEleitores.value/100); 
        let percentVtNul = votosNulos.value / (numEleitores.value/100); 
        let validos = percentVtVal.toFixed(1) + "% de votos válidos";
        let brancos = percentVtBrn.toFixed(1) + "% de votos brancos";
        let nulos = percentVtNul.toFixed(1) + "% de votos nulos";
    
        let resVal = document.querySelector(".validos");
        let resBrn = document.querySelector(".brancos");
        let resNul = document.querySelector(".nulos");
        resVal.textContent = validos;
        resBrn.textContent = brancos;
        resNul.textContent = nulos;
    }
}