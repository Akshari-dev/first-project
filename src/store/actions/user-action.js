export const getUsers=()=>dispatch=>{
    fetch( "https://jsonplaceholder.typicode.com/users")
    .then((responce)=>{ return responce.json()})
    .then((responsjson)=>{dispatch({type:"SET_USER",value: responsjson})})
    .catch((error)=>{})

}

//   .then(response => response.json())
//   .then(data => console.log(data));}