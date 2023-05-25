import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Todolist from './components/Todolist';

function App() {
  const [listTodo, setListTodo]=useState([]);

  const deleteListItem = (key)=>{
    let newTodoList = [...listTodo];
    newTodoList.splice(key,1)
    setListTodo([...newTodoList])
}

  let addList = (inputText)=>{
    if(inputText!==''){
    setListTodo([...listTodo, inputText]);
  }
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
      <TodoInput addList={addList}/>
      
      <h1 className='app-heading'>TODO List</h1>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return(
         < Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} />
        )
      })}
      </div>
    </div>
  );
}
export default App;
