export const getPhotos=()=>dispatch=>{

fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>{ return response.json()})
.then(data=>{
    dispatch({type:"SET_PHOTOS", value:data})
    console.log(data)})

}