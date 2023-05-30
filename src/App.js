import React from "react";
import Modulos from './styles/div.module.css';
import Pantalla from "./components/Pantalla";
import {Operacion} from './AuxFunctions/Operacion';
import {Convert} from './AuxFunctions/Convert';
import {Porcentaje, Potencia} from './AuxFunctions/Porcentaje_y_Potencia';
import Botones from './components/Botones';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      Operation: '',
      Result: 0,
      ValorActual: [0],
      Valor1: [],
      UltimaOperacion:'',
      MemoriaCalculo: 0,
      NegativoA:false,
      NegativoB:false,
      mostrarResultado: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.controlMax = this.controlMax.bind(this);
    this.ControlPantalla = this.ControlPantalla.bind(this);
  }

  controlMax(){    //Delimita el maximo de caracteres que pueden estar en pantalla
    if(this.state.ValorActual.length >=15){
      alert("Limit")
      this.setState({
        ValorActual:[],
      })
    }
  }
  ControlPantalla(){
    if (this.state.Result !==0) {
      this.setState({
        Result: 0,
      })
    }
  }

  handleClick(event){ //Manejador de eventos
    const variable = Convert(event.target.id);
    console.log(variable)
    this.ControlPantalla()
    this.setState({mostrarResultado: false,})

    if(variable === 'subtract' && this.state.UltimaOperacion === ''){
      this.setState({
        NegativoA: !this.state.NegativoA
      })
    }

    if(parseInt(variable) >=0  && parseInt(variable) <10){
      if(this.state.ValorActual == 0 || (variable == 0 && this.state.ValorActual == 0)){
        this.setState({
          ValorActual:[variable],
          mostrarResultado: false,
      })
      } else {
          const nuevoValor = [...this.state.ValorActual, variable];
          this.setState({
            ValorActual: nuevoValor,
            mostrarResultado: false,
          });
          this.controlMax() //Limit
      }
    }

    switch(variable){   //Evaluar Botones de funcionalidades
      case "clear":
        this.setState({
          ValorActual: [],
          Valor1: [],
          MemoriaCalculo: 0,
          NegativoA: false,
          NegativoB: false,
          mostrarResultado: false,
        })
      
        break;
      case "potencia":
        this.setState({
          Operation: 'potencia'
        });
        break;
      case "porcentaje":
        this.setState({
          Operation: "porcentaje",
        })
        break;
      case 'divide':
        this.setState({
          Operation: "divide",
        })
        break;
      case 'multiply':
        this.setState({
          Operation: 'multiply',
        })
        break;
      case 'subtract':
        this.setState({
          Operation: 'subtract',
          NegativoB: !this.state.NegativoB
        })
        break;
      case 'add':
        this.setState({
          Operation: 'add',
        })
        break;
      case 'decimal':
        if(this.state.ValorActual[this.state.ValorActual.length-1] !==","){
          const nuevoValor = [...this.state.ValorActual, ","];
          this.setState({
            ValorActual: nuevoValor
          })
        }
        break;
      default:
        break;
    }
    
    if(variable === "porcentaje"){ //calcula el porcentaje
      if(this.state.MemoriaCalculo !== 0){
        const resultado = Porcentaje(this.state.MemoriaCalculo)
        this.setState({
          Result:resultado,
          MemoeriaCalculo: resultado,
          Valor1: [],
          ValorActual: [],
          mostrarResultado: true,
        })
      }else {
        const resultado = Porcentaje(this.state.ValorActual)
        this.setState({
          Result:resultado,
          MemoeriaCalculo: resultado,
          Valor1: [],
          ValorActual: [],
          mostrarResultado: true,
        })
      }
    }

    if(variable === "potencia"){ //Calcula la potencia
      if(this.state.MemoriaCalculo !== 0){
        const resultado = Potencia(this.state.MemoriaCalculo)
        this.setState({
          Result:resultado,
          MemoeriaCalculo: resultado,
          Valor1: [],
          ValorActual: [],
          mostrarResultado: true,
        })
      }else {

        const resultado = Potencia(this.state.ValorActual)
        this.setState({
          Result:resultado,
          MemoeriaCalculo: resultado,
          Valor1: [],
          ValorActual: [],
          mostrarResultado: true,
        })
      }
    }
    
    if(!parseInt(variable) && variable !== "decimal" && variable !== '0' && variable !== 'porcentaje' && variable !== 'potencia'){ //Si entro aca significa que toco alguno de los botones del switch 
      
      console.log('ultima operacion '+this.state.UltimaOperacion)
      if(this.state.UltimaOperacion === 'add' && (variable === 'divide' || variable === 'multiply')) {
        this.setState({
          UltimaOperacion: variable,
          mostrarResultado: false,
        })
      }  else if((this.state.UltimaOperacion === 'divide' || this.state.UltimaOperacion === 'multiply') && variable ==='subtract'){
        this.setState({
          NegativoB: !this.state.NegativoB,
          Operation: this.state.UltimaOperacion,
          mostrarResultado: false,
        })
      }
      else {
        this.setState({
          Valor1: this.state.ValorActual,
          ValorActual: [],
          UltimaOperacion: variable,
          mostrarResultado: false,
      })
      }
    }

    if(variable === "equals"){ //Calcula la igualdad de la ecuacion
      console.log('la memoria de calculo es: '+this.state.MemoriaCalculo+' la variable es: '+variable)
      if(this.state.MemoriaCalculo !== 0){
        const resultado = Operacion(this.state.MemoriaCalculo,this.state.ValorActual,this.state.Operation,this.state.NegativoA,this.state.NegativoB)
        this.setState({
          Result: resultado,
          MemoriaCalculo: resultado,
          Valor1: [],
          ValorActual: [],
          NegativoA: false,
          NegativoB: false,
          mostrarResultado: true,

        })
      } else {
        const resultado = Operacion(this.state.Valor1,this.state.ValorActual,this.state.Operation, this.state.NegativoA, this.state.NegativoB)
        this.setState({
          Result: resultado,
          MemoriaCalculo: resultado,
          Valor1: [],
          ValorActual: [],
          NegativoA: false,
          NegativoB: false,
          mostrarResultado: true,
        })
    }
    console.log('NegativoA: '+this.state.NegativoA+' NegativoB '+this.state.NegativoB)
  }
}
  
  render(){
    return(
      <div className={Modulos.home} id="home">
        <div className={Modulos.calculator_back}>
          <div className={Modulos.calculator_white} id="fondo">
            {/* pantalla */}
            <div className={Modulos.pantalla} id="display">
              <Pantalla 
                valorActual={this.state.ValorActual} 
                signo={this.state.Signo} 
                valor1={this.state.Valor1} 
                result = {this.state.Result}
                ultimaOperacion = {this.state.UltimaOperacion}
                mostrarResultado = {this.state.mostrarResultado}/>  
            </div>
            {/* comandos */}
           <Botones
            handleClick={this.handleClick}
            />
          </div>
        </div>
      </div>
    )
  }

}

export default App;

