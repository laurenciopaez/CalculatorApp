export function Operacion(array1,array2,Operacion,signo1,signo2){

    let resultado,valor1,valor2;
    let contieneComa,contieneComa2;
if(Array.isArray(array1)){ //Verifico si es memoria de calculo o primer calculo
    //Primero verifico si tiene coma en algun lugar los arrays
    for(let i=0; i<array1.length;i++){ //Sirve para ver si tiene coma
        if(array1[i]===","){
            contieneComa=true;
        }
    }
    
    //Si tiene coma, tengo que encontrar el indice donde se encuentra la coma,
    //Luego filtrar la coma y tener el array sin la coma
    //Luego junto lo resultante y divido el array en el indice
    //Convierto la cadena en un numero
    if (contieneComa){ //Filtra la coma y la transforma en numero
        const posicionComa = array1.indexOf(",");
        const arraySinComa = array1.filter(elemento => elemento !== ",");
        const numeroString = arraySinComa.join("");
        const numeroStringConComa = `${numeroString.slice(0, posicionComa)}.${numeroString.slice(posicionComa)}`;
         valor1 = parseFloat(numeroStringConComa);
    } else {
         valor1 = parseInt(array1.join(''));
    }
} else {  //Si me da que no es un array, valor1=array1
    valor1 = array1;
}

for(let i=0; i<array2.length;i++){ //Sirve para ver si contiene coma
    if(array1[i]===","){
        contieneComa2=true;
    }
}

if (contieneComa2){ //Filtra la coma y lo transforma en un numero
    const posicionComa2 = array2.indexOf(",");
    const arraySinComa2 = array2.filter(elemento => elemento !== ",");
    const numeroString2 = arraySinComa2.join("");
    const numeroStringConComa2 = `${numeroString2.slice(0, posicionComa2)}.${numeroString2.slice(posicionComa2)}`;
     valor2 = parseFloat(numeroStringConComa2);
} else{ 
     valor2 = parseInt(array2.join(""));    
}
if(signo1){
    valor1= valor1*-1
}
if(signo2){
    valor2= valor2*-1
}

    console.log('el valor1 es: '+valor1+"|| el valor2 es: "+valor2+' la operacion es: '+Operacion)
    switch(Operacion){
        case "add":
            resultado = valor1+valor2;
            break;
        case 'subtract':
            resultado = valor1 + valor2;
            break;
        case 'multiply':
            resultado = valor1*valor2;
            break;
        case 'divide':
            resultado = valor1/valor2;
            break;
        default:
            break;
    }
    return resultado;
}

