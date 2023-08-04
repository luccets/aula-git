

function calcular(raio){
    return `Perimetro: ${2 *Math.PI * raio} <br>
    Area: ${Math.PI * raio *raio} <br>`
};
console.log(calcular(10));  //print na aba console
document.write(calcular(20)); //print na tela

const multiplicacao=(num)=>{return num * num} // estrutura de arrow function
console.log(multiplicacao(9))
document.write(multiplicacao(9))

document.write("<br>")

const multiplicacao2=(num)=>{return num * num}
console.log(multiplicacao(10)) //arrow function com outro valor
document.write(multiplicacao(10))