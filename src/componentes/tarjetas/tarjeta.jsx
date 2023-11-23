

import styles from './tarjeta.module.css';
import {useState } from "react";

const Tarjeta = ({postHandleClick}) => {

    const [titulo, setTitulo] = useState("");
    const [fecha, setFecha] = useState("");

    const handleClick = () => {
        const [fechaCompleta, hora] = fecha.split('T');
        const [año,dia, mes] = fechaCompleta.split('-');

console.log("Titulo:", titulo);
console.log("Hora:", hora);
console.log("Dia:", dia);
console.log("Mes:", mes);
console.log("Año:", año);

     postHandleClick(titulo,hora,dia,mes)
    }

    const handleChangeTitulo = (event) => {
        setTitulo(event.target.value);
    }

    const handleChangeFecha = (event)=>{
        setFecha (event.target.value);
    }


    return<>
        <div className={styles.tarjeta}>

        <div className={styles.container}>
            <textarea value={titulo} className={styles.tarjetaTitulo} onChange={handleChangeTitulo} placeholder='Agrega una tarea'></textarea>
            <input  onChange={handleChangeFecha} value={fecha} type="datetime-local" required/>
        </div>
            <button  onClick={handleClick}> <img src="recursos/boton-agregar.png" alt="add task" /></button>
        </div>
        
    </>


};

export default Tarjeta