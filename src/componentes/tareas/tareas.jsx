import styles from './tareas.module.css';
import {useState} from 'react'


const Tareas= ({ hora,mes,dia, titulo, done, id, update, setUpdate}) => {
    const [taskDone, setTaskDone] = useState(done) 

    const handleDoneTask = async () => {
        setTaskDone(!taskDone)
        await fetch(`http://localhost:4000/todo/${id}`, {
            method : "PATCH",
            headers: {
                "Content-type" : "application/json"
            },
            body : JSON.stringify({done: taskDone })
        })
        setUpdate(!update)
    }




    return<>
        <div className={styles.tarjeta}>
        <div className={styles.fecha}>
                <span>{dia}</span>
                <span>{mes}</span>
        </div>
        <div className={styles.container}>
            <div className={styles.texto}>
                <p>{titulo}</p>
                <span>{hora}</span>
            </div>
        </div>
            <input className={styles.check} type='checkbox' defaultChecked={taskDone} onClick={handleDoneTask}/>
            <button className={styles.eliminar}><img className={styles.imgEliminar}src="recursos/eliminar.png" alt="eliminar task" /></button>
        </div>
        
    </>


};

export default Tareas