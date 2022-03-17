import { CardActions, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Button } from 'bootstrap';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions/user-action';

const Users = () => {
  const users=useSelector((store)=>(store.users));
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(getUsers(users))})
  return (
    
    
      <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    {users.map((element, index)=>{
      return <React.Fragment>
      <CardContent className='cards'>
        <Typography  variant="h3"color="text.secondary" gutterBottom>
      Name:{element.name}
        </Typography>
        <Typography variant="h3" component="div" >
       Username:{ element.username}
        </Typography>
        <Typography variant="h3" color="text.secondary">
        EmailID: {element.email}
        </Typography>
        <Typography variant="h3">
          ID:{element.id}
          <br />
           </Typography>
        <Typography variant="h3" color="text.secondary">  Phone:{element.phone}</Typography>
        <Typography variant="h3" color="text.secondary">  Website:{element.website}</Typography>
        <Typography variant="h3" color="text.secondary">  Company:{element.company.name}</Typography>
        <Typography variant="h3" color="text.secondary">  {element.company.catchPhrase}</Typography>
        <Typography variant="h3" color="text.secondary">  {element.company.bs}</Typography>
      </CardContent>
  
      
     
    </React.Fragment>
    })}
  </Box>
    
  )
}

export default Users