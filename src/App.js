import {useState} from 'react'
import AddItemForm from './components/AddItemForm.jsx'
import UpdateItemForm from './components/UpdateItemForm.jsx'
import ToDo from './components/ToDo.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

function App() {

  const [toDo, setToDo] = useState([
    {id: 1, title: 'Task 1', status: false},
    {id: 2, title: 'Task 2', status: false}
  ])

 
  const [item, setItem] = useState('')
  const [updateList, setUpdateList] = useState('')

  const addItem = () => {
    if(item) {
      let num = toDo.length + 1 
  
      setToDo([
        ...toDo, 
        { id: num, title: item, status: false }
      ])

      setItem('')

    }
  }

  
  const deleteItem = (id) => {
    
    setToDo(toDo.filter(task => task.id !== id))

  }

  
  const markDone = (id) => {
    
   

    // refactored
    setToDo(toDo.map(
      task => task.id === id 
      ? ({ ...task, status: !task.status }) 
      : (task) 
    ))

  }

  const cancelUpdate = () => {
    setUpdateList('')
  }

  
  const changeHolder = (e) => {

    setUpdateList({...updateList, title: e.target.value})

  }

 
  const updateTask = () => {
  
    let removeOldRecord = [...toDo].filter(task => task.id !== updateList.id)
    setToDo([
      ...removeOldRecord, 
      updateList
    ])
    
    setUpdateList('')

  }

  return (
    <div className="container App">

    <br /><br />
    <h2>To Do List App</h2>
    <br /><br />

    {updateList && updateList ? (
      <UpdateItemForm 
        updateList={updateList}
        changeHolder={changeHolder}
        updateTask={updateTask}
        cancelUpdate={cancelUpdate}
      />
    ) : (
      <AddItemForm 
        item={item}
        setItem={setItem}
        addItem={addItem}
      />
    )}

    {toDo && toDo.length ? '' : 'No Tasks...'}

    <ToDo
      toDo={toDo}
      markDone={markDone}
      setUpdateList={setUpdateList}
      deleteItem={deleteItem}
    />  

    </div>
  );
}

export default App;
