import "./App.css";
import Tarjeta from "./componentes/tarjetas/tarjeta";
import Tareas from "./componentes/tareas/tareas";
import { useEffect, useState } from "react";
function App() {
 
  const [todoList, setTodoList] = useState([]);
  const [update, setUpdate] = useState(false)


useEffect(() => {
  const fetchData = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/todo");
      if (!respuesta.ok) {
        throw new Error("No se pudo obtener la información del servidor");
      }
      const datosJson = await respuesta.json();
      console.log("Datos obtenidos:", datosJson);
      setTodoList(datosJson.data);
    } catch (error) {
      console.error("Error al obtener datos del servidor:", error.message);
    }
  };
  fetchData();
}, [update]);

console.log("Estado actual de todoList:", todoList);


return (

  <>
  
  <div className="toDo">


    <div className="top">
        <Tarjeta 
        todoList={todoList}
        setTodoList={setTodoList}
        className="tarjeta-list"/>
    </div>


    <div className="todo-list">
    {todoList.length>0? (
        todoList.map((todo) => (
    <Tareas
      update={update}
      setUpdate={setUpdate}
        key={todo.id}
        id={todo.id}
        hora={todo.hora}
        mes={todo.mes}
        dia={todo.dia}
        titulo={todo.text}
        done={todo.done}
    />
    ))
  ) : (<div>
    <p>¡No hay tareas pendientes!</p>
    <img className="bienImg"src="recursos/voto-positivo.png" alt="muy bien" />


  </div>)}
    </div>

  </div>
  
    
  </>
    
);
}
export default App;
