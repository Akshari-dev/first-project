export const getcomment=()=>dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((responce)=>{ return responce.json()})
    .then((responcejson)=>{dispatch({type:"SET_COMMENT", value:responcejson})})
    .catch((error)=>{console.log(error)})
}