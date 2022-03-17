export const getpost=()=>dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((responce)=>{ return responce.json()})
    .then((responcejson)=>{dispatch({type:"SET_POST", value:responcejson})})
    .catch((error)=>{console.log(error)})
}