import { IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from '../store/actions/photo-action';


const Photos = () => {
  const photos=useSelector((store)=>store.photos)
  const dispatch=useDispatch();

  useEffect(()=>{dispatch(getPhotos(photos))},[])

  console.warn(photos)
  return (<>
    <div>
      <center>
        {photos.map((element, index)=>{
         
         return <img key={index} src={element.url}>

          </img> })}
      </center>
    </div>
    </>)
}

export default Photos