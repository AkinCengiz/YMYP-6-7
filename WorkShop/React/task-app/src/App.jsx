import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';


function App() {
  const [tasks,setTasks] = useState([]);

  const createTask = (title,description,important) => {
    setTasks([...tasks,{
      id : Math.ceil(Math.random() * 9999999),
      // title : title,
      // description:description,
      // important : important
      title,
      description,
      important
    }]);
    console.log(tasks);
  }
  return (
    <>
    <div id="app">
      <div id="task-form-container">
        <TaskForm create={createTask}/>
      </div>
      <TaskList tasks={tasks}/>
    </div>
    </>
  )
}

export default App


