import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gettodo } from '../store/actions/todo-action';

const Todos = () => {
  const todos=useSelector((store)=>store.todos)
  const dispatch=useDispatch();

  useEffect(()=>{dispatch(gettodo())},[])
  console.warn(todos)

  return (
    <div>
      <table border="1" cellSpacing={"10px"} border-style="solid">
        <tr>
          <th>UserID</th>
          <th>ID</th>
          <th>Tittle</th>
          <th>Completed</th>
        </tr>
        <tbody>
      {todos.map((element, index)=>{
       return <tr><td>{element.userId}</td>
        <td>{element.id}</td>
        <td>{element.title}</td>
        <td>{JSON.stringify(element.completed)}</td>
</tr>
      })}
      </tbody>
      </table>
    </div>
  )
}

export default Todos