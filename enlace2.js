
const h1=document.querySelector("h1")

const input1=document.querySelector("#calculo1")
const input2=document.querySelector("#calculo2")
const btn=document.querySelector("#btnCalcular")
const presult=document.querySelector("#result")


function btnOnClick(){
    const sumaInputs= parseInt(input1.value) + parseInt(input2.value)
    presult.innerText="Resultado: " + sumaInputs
    //console.log(input1.value + input2.value)

}