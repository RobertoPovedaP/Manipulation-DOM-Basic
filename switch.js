estado="";
function juego_ppt(user,pc){
op1="piedra";
op2="papel";
op3="tijera";

    switch(true){
        case user==pc:
            estado="empate"
        break;
        case (user==op1 && pc==op3):
            estado= "ganaste"
        break;
        case (user==op2 && pc==op1):
            estado= "ganaste"
        break;
        case (user==op3 && pc==op2):
            estado= "ganaste"
        break;
        default:
            estado= "perdiste"

    }
}

juego_ppt("piedra","tijera");
console.log("Resultado: "+estado);
