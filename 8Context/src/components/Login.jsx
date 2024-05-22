import React, {useState,useContext} from 'react'
import UserContext from '../Context/userContext'

function login() {
    const[username ,setUsername] =useState('')
    const[password ,setPassword] =useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
      e.preventDefault()
      setUser({username,password})

    }
  return (
    <div>
      <h2>login</h2>
      <input type="text"
      onChange={(e) => setUsername(e.target.value)} value={username} placeholder='username' />
      <input type="text"
       onChange={(e) => setPassword(e.target.value)} value={password} placeholder='Password' />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default login
