// import logo from './logo.svg';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { getUsers } from './store/actions/user-action';
// import{gettodo} from "./store/actions/todo-action"
// import {getpost} from "./store/actions/post-actions"
// import{getcomment} from "./store/actions/comment-action"
// import {getphotos} from "./store/actions/photo-action"
// import {getAlbums} from "./store/actions/album-actions"

// function App() {
//  const selector= useSelector(store=>store)
//  console.warn(selector);
//  const dispatch=useDispatch()

// //  const set_album=()=>{
// //    dispatch({type:"SET_ALBUM"})
// //  }
 
// useEffect(()=>{dispatch(getAlbums())},[])


 
//  return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Posts from './component/posts';
import Users from './component/users';
import Todos from './component/todos';
import Comments from './component/comments';
import Photos from './component/photos';
import Album from './component/albums';
import Navbar from './component/navbar';

function App() {
 
 return (
  <>

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='post' element={<Posts/>}/>
      <Route path='album' element={<Album/>}/>
      <Route path='photo' element={<Photos/>}/>
      <Route path='comment' element={<Comments/>}/>
      <Route path='users' element={<Users/>}/>
      <Route path='todos' element={<Todos/>}/>

      
    </Routes>
  
    </BrowserRouter>

</>


  );
}

export default App;

