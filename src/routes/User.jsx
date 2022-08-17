import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteUser, getUser } from '../users'

export const User = () => {
    const params = useParams()
    const navigate = useNavigate()
    const user = getUser(+params.userId)

    const handleDelete = ()=>{
      deleteUser(user.id)
      navigate('/users',{replace:true})
    }

    if(!user){
      return <div>El usuario no Existe!!!</div>
    }

  return (
    <div>
        <h1>User | {user.id}</h1>
        <h1>{user.name}</h1>
        <div><strong>Name:</strong>{user.name}</div>
        <div><strong>Email:</strong>{user.email}</div>
        <div><strong>Website:</strong>{user.website}</div>
        <div><strong>Phone: </strong>{user.phone}</div>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
