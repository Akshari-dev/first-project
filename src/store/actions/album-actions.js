export const getAlbums=()=>dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((responce)=>{return responce.json()})
    .then((responcejson)=>{dispatch({type:"SET_ALBUM", value:responcejson})})
    .catch((error)=>{console.log(error)})
}