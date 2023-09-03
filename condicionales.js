





function juego_ppt(user, pc){
op1="piedra";
op2="papel";
op3="tijera";
estado="";

    if (user==op1 && pc==op3){
        estado= "ganaste"
        return estado
    }
    else if(user==op2 && pc==op1){
        estado= "ganaste"
        return estado
    }
    else if(user==op3 && pc==op2){
        estado= "ganaste"
        return estado
    }
    else if(user==pc){
        estado= "empate"
        return estado
    }
    else{
        estado= "perdiste"
        return estado
    }
}

console.log(juego_ppt("piedra","tijera"));



