import { Typography, Divider } from '@mui/material';
import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([]);

  const deleteTaskById=(id)=>{
    // console.log(id);
    const afterDeleteTasks = tasks.filter((task)=>{
      return task.id !== id;
    })
    setTasks(afterDeleteTasks);
  }


  const createTask = (title, taskDesc) => {
    const createdTasks = [
      ...tasks, {
        id: Math.round(Math.random() * 9999999999),
        title,
        taskDesc
      }
    ];
    setTasks(createdTasks);
  }

  const handleEditById=(id, updatedTitle, updatedTask)=>{
      const updatedTasks= tasks.map((task)=>{
        if(task.id === id){
          return {id, title: updatedTitle, taskDesc:updatedTask}
        }
        return task;
      });
      setTasks(updatedTasks);
  }


  return (
    <div className="App">
      <br />
      <Typography variant='h5'>Lütfen Task ekleyiniz</Typography>
      <br />
      <CreateTask onCreate={createTask} />
      <br />
      <Divider />
      <br />
      <Typography variant='h4'>GÖREVLER</Typography>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={handleEditById} />
    </div>
  );
}

export default App;
