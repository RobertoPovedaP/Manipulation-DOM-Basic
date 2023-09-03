
function solution2(arraySecreto){
    
    if(typeof arraySecreto[0]=='string'){
        return true
    }else{
        return false
    }

}

function solution(arraySecreto){
    return (typeof arraySecreto[0]=="string"? true:false)
}

var array1 = ["Huevo", "Gallina", "Vaca"]
console.log(solution(array1))

var array2 = [1, "Gallina", "Vaca"]
console.log(solution(array2))


function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    if (deathCount=0){
        estudiantes.push(nuevo);
        console.log(estudiantes);
    }
    else if(deathCount>0){
        for(var i=0; (i < estudiantes.lenght)&&(deathCount > 0); i++){
        estudiantes[i].pop();
        deathCount--;
        }
        estudiantes.push(nuevo);
        console.log(estudiantes);
    }
}
  

  //var estudiantes= ["Roberto", "Gabriel", "Luiggi", "Kevin"];
  //var deathCount = 2;
  //var nuevo = "Chino";
  //solution(estudiantes, deathCount, nuevo);
  solution(["Roberto", "Gabriel", "Luiggi", "Kevin"], 2, "Chino")

//solucion correcta 2
function solution(estudiantes, deathCount, nuevo){
    while(deathCount > 0){
        estudiantes.pop()
        deathCount--
    }
    estudiantes.push(nuevo)
    return estudiantes
}
 
console.log(solution(["Nico", "Zule"], 0, "Santi"))
console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"))
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"))

//solucion correcta 3
function solution(estudiantes, deathCount, nuevo) {
    for (var i = 0; i < deathCount; i++) {
      estudiantes.pop();
    }
  
    estudiantes.push(nuevo);
    return estudiantes;
  }

console.log(solution(["Nico", "Zule"], 0, "Santi"))
console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"))
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"))

