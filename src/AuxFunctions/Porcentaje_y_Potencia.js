export function Porcentaje(value){
    if(Array.isArray(value)){
        let valor1,contieneComa;
        for(let i=0; i<value.length;i++){ //Sirve para ver si tiene coma
            if(value[i]===","){
                contieneComa=true;
            }
        }
        if (contieneComa){ //Filtra la coma y la transforma en numero
            const posicionComa = value.indexOf(",");
            const arraySinComa = value.filter(elemento => elemento !== ",");
            const numeroString = arraySinComa.join("");
            const numeroStringConComa = `${numeroString.slice(0, posicionComa)}.${numeroString.slice(posicionComa)}`;
             valor1 = parseFloat(numeroStringConComa);
        } else {
             valor1 = parseInt(value.join(''));
        }
        return valor1/100;
    }
    return value/100;
}

export function Potencia(value){
    if(Array.isArray(value)){
        let valor1,contieneComa;
        for(let i=0; i<value.length;i++){ //Sirve para ver si tiene coma
            if(value[i]===","){
                contieneComa=true;
            }
        }
        if (contieneComa){ //Filtra la coma y la transforma en numero
            const posicionComa = value.indexOf(",");
            const arraySinComa = value.filter(elemento => elemento !== ",");
            const numeroString = arraySinComa.join("");
            const numeroStringConComa = `${numeroString.slice(0, posicionComa)}.${numeroString.slice(posicionComa)}`;
             valor1 = parseFloat(numeroStringConComa);
        } else {
             valor1 = parseInt(value.join(''));
        }
        return Math.pow(valor1, 2);
    }
    return Math.pow(value, 2);
}