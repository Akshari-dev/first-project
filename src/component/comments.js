import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcomment } from '../store/actions/comment-action'

const Comments = () => {
  const comments=useSelector((store)=>store.Comments)
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(getcomment())})
  return (
    <div>Comments</div>
  )
}

export default Comments