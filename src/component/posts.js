import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getpost } from '../store/actions/post-actions'

const Posts = () => {
  const posts=useSelector((store)=>(store.posts))
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(getpost(posts))}, [])
  return (
    <div>Posts</div>
  )
}

export default Posts