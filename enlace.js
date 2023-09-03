
const h1=document.querySelector("h1")

const p = document.querySelector("p")

const parra=document.querySelector(".parra")

const pid=document.querySelector("#pid")

const input=document.querySelector("input")

console.log({
    h1,
    p,
    parra,
    pid,
    input
})

h1.innerHTML="Cambiado XD <br> Jojo"
h1.innerText="Rapp <ja>"

console.log(h1.getAttribute("pantalla"))
console.log(h1.setAttribute("pantalla","brolly"))
h1.classList.add("enma")
h1.classList.add("frezzer")
h1.classList.remove("enma")

input.value="esfera 4"

const img= document.createElement("img")
img.setAttribute("src", "https://media.licdn.com/dms/image/C4E03AQF9dW8tEdvGaA/profile-displayphoto-shrink_800_800/0/1632108128479?e=2147483647&v=beta&t=IE9Ugi_erfDrQxaOvhIv4utmmIOvoQ6HRHG3_vMgO8w")

pid.append(img)