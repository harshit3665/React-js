import { useState } from 'react'
import login from './components/login'
import './App.css'
import UserContextP from './Context/UserContextP'
import Profile from './components/Profile'
function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextP>
   <Login />
   <Profile />
    </UserContextP>
  )
}

export default App
