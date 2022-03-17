export const gettodo=()=>dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((responce)=>{ return responce.json()})
    .then((responcejson)=>{dispatch({type:"SET_TODOS", value:responcejson})})
.catch((error)=>{console.log(error)})
}