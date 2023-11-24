import "./App.css";
import Tarjeta from "./componentes/tarjetas/tarjeta";
import Tareas from "./componentes/tareas/tareas";
import { useEffect, useState } from "react";
function App() {
 
  const [todoList, setTodoList] = useState([]);
  const [update, setUpdate] = useState(false)


// POST //

const postHandleClick = (titulo, hora, dia ,mes) => {
  const dateNueva = new Date (`${dia}-${mes}-${hora}`);
  
  fetch("http://localhost:4000/todo",{
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: titulo,
      hora: dateNueva.getHours(),
      dia : dateNueva.getDate(),
      mes: dateNueva.getMonth()+1,
      done: done,
      
    }),
  })
  .then ((response)=>{
    if (!response.ok) {
      throw new Error("La respuesta de red no fue correcta.");
      }
    return response.json();
  })

  .then ((data)=>{
    console.log("Respuesta a data",data)
    setTodoList([...todoList,data]);
    console.log("Nuevo estado de todoList:", todoList);
  })

  .catch ((error)=>{
    console.log("Error",error);
  })

};




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
        <Tarjeta className="tarjeta-list"
        postHandleClick={postHandleClick}/>
    </div>


    <div className="todo-list">
    {todoList.map((todo) => (
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
    ))}
    </div>

  </div>
  
    
  </>
    
);
}
export default App;
