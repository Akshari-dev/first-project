import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbums } from '../store/actions/album-actions';

const Albums = () => {
  const albums=useSelector(store=>{ return store.albums});
  const dispatch=useDispatch();
  
  useEffect(()=>{dispatch(getAlbums())},
  [])

  console.warn(albums)
  
  return (
    <div>Albums</div>
  )
}

export default Albums;