import React, { useEffect, useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import { api } from './api/apiResource';
import uuid from 'react-uuid';

const App = () => {

  const [tasks,setTasks] = useState([]);

  const fetchData = async () => {
    const res = await api.get('/todoList');
    setTasks(res.data)
  }

  useEffect( () => {
    fetchData()
  },[tasks])

  const submitTask = async(userTask) => {
    const data = {
      "id" : uuid(),
      "tasks" : userTask,
      "status" : false
    }
    await api.post('/todoList',data); 
  }

  const deleteTask = async (id) => {
    await api.delete(`/todoList/${id}`);
  }

  const updateTask = async (id,status) => {
    await api.patch(`/todoList/${id}`,{status})
  }
  return (
    <div>
      <List tasks={tasks} submitTask={submitTask} deleteTask={deleteTask} updateTask={updateTask}/>
    </div>
  )
}

export default App