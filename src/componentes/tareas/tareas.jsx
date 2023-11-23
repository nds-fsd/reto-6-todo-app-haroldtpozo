import styles from './tareas.module.css';


const Tareas= ({ hora,mes,dia, titulo, done }) => {

    return<>
        <div className={styles.tarjeta}>

        <div className={styles.container}>
            <div className={styles.fecha}>
                <span>{dia}</span>
                <span>{mes}</span>
            </div>
            <div className={styles.texto}>
                <p>{titulo}</p>
                <span>{hora}</span>
            </div>
        </div>
            <input type='checkbox' defaultChecked={done}/>
        </div>
        
    </>


};

export default Tareas