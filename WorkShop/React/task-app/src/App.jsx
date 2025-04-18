import { useEffect, useState } from 'react'
import axios from "axios";
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';


//HTTP Metotları
/**
 * 
 * get => Veri getirmek için kullanılır
 * post => Yeni veri oluşturmak için kullanılır
 * put => Var olan veriyi güncellemek için kullanılır
 * delete => Veriyi silmek için kullanılır
 */


function App() {
  const [tasks,setTasks] = useState([]);

  const createTask = async(title,description,important) => {
    const response = await axios.post("http://localhost:3000/tasks",{
      title,
      description,
      important
    });
    //console.log(response);
    // setTasks([...tasks,{
    //   id : Math.ceil(Math.random() * 9999999),
    //   // title : title,
    //   // description:description,
    //   // important : important
    //   title,
    //   description,
    //   important
    // }]);
    setTasks([...tasks,response.data]);
  }

  const getTasks = async() => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  }

  useEffect(() => {
    getTasks();
  },[]);//Her zaman


  //numbers = [1,2,3,4,5];
  
  //newNumbers = numbers.filter((number) => number !== 3)
  //[1,2,4,5]

  //tasks = [{id:1,title:Html,description:"sdfsdsdsa",important:true}] 
   async function deleteTask(id){
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    getTasks();
    
    // const deletedAfterTasks = tasks.filter((task) => task.id !== id);
    // setTasks(deletedAfterTasks);

  }

  const updateTask = async (id,title,description,important) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title,
      description,
      important
    });
      // const updatedTasks = tasks.map((task) => {
      //   if(task.id === id){
      //     return {id,title,description,important}
      //   }
      //   return task;
      // })
      // setTasks(updatedTasks);
      getTasks();
  }

  return (
    <>
    <div id="app">
      <div id="task-form-container">
        <TaskForm create={createTask}/>
      </div>
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
    </>
  )
}

export default App


