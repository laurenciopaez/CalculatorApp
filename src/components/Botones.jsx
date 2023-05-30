import Modulos from '../styles/div.module.css'
import React from 'react';

class Botones extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
    return(
        <>
        <div className={Modulos.comandos}>
        <div className={Modulos.comandos_boton} id="clear" onClick={this.props.handleClick} >
            <h1 className={Modulos.comandos_boton_h1}>AC</h1>
        </div>
        <div className={Modulos.comandos_boton} id="potencia"  onClick={this.props.handleClick}>
            <h1 className={Modulos.comandos_boton_h1}>^2</h1>
        </div>
        <div className={Modulos.comandos_boton} id="porcentaje"  onClick={this.props.handleClick}>
            <h1 className={Modulos.comandos_boton_h1}>%</h1>
          </div>
        <div className={Modulos.comandos_boton_naranja} id="divide"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>÷</h1>
        </div>
        <div className={Modulos.comandos_boton} id="seven"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>7</h1>
        </div>
        
        <div className={Modulos.comandos_boton} id="eight"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>8</h1>
        </div>
        <div className={Modulos.comandos_boton} id="nine"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>9</h1>
        </div>
        <div className={Modulos.comandos_boton_naranja} id="multiply" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>X</h1>
        </div>
        <div className={Modulos.comandos_boton} id="four" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>4</h1>
        </div>
        <div className={Modulos.comandos_boton} id="five" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>5</h1>
        </div>
        
        <div className={Modulos.comandos_boton} id="six" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>6</h1>
        </div>
        <div className={Modulos.comandos_boton_naranja} id="subtract" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>-</h1>
         </div>
        <div className={Modulos.comandos_boton} id="one" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>1</h1>
        </div>
        <div className={Modulos.comandos_boton} id="two" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>2</h1>
        </div>
        <div className={Modulos.comandos_boton} id="three"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>3</h1>
        </div>
        
        <div className={Modulos.comandos_boton_naranja} id="add"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>+</h1>
        </div>
        <div className={Modulos.comandos_boton} id="zero"  onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>0</h1>
        </div>
        <div className={Modulos.comandos_boton} id="" onClick={this.props.handleClick}>
          
        </div>
        <div className={Modulos.comandos_boton} id="decimal" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>,</h1>
        </div>
        <div className={Modulos.comandos_boton_naranja}  id="equals" onClick={this.props.handleClick}>
          <h1 className={Modulos.comandos_boton_h1}>=</h1>
        </div>
      </div>
    </>
    );
}
}

export default Botones;