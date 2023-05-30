import Modulos from '../styles/div.module.css'

function Pantalla(props){



    return(
        <>
        {/* Resultados */}
            <div className={Modulos.pantalla_Resultados}>
                <div className={Modulos.comandos_boton_h1}>
                    {props.ultimaOperacion}
                </div>
                <div className={Modulos.comandos_boton_h1}>
                    {props.valor1}
                </div>
            </div>
        {/* Numeros actuales */}
            <div className={Modulos.pantalla_NumActuales}>
                {props.mostrarResultado
                    ? <h1>{props.result}</h1>
                    : <h1>{props.valorActual}</h1>}
                
            </div>
        </>
    )
}

export default Pantalla;