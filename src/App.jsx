
import './App.css'
import { useEffect, useState } from 'react'
import { Home } from './components/styles/home/home'
import { SignUp } from './components/signUp/signUp'
import { Login } from './components/login/login'
import { Verify } from './components/verification/verify'
import { Update } from './components/update/update'
import { Dashboard } from './components/dashboard/dashboard'


const App =()=> {

  const [status, setStatus] = useState(false)
  const change =()=> setStatus(true)

useEffect(()=>{
  setTimeout(change, 5000)
}, [])


  return (
    <div className="App">
     {status ? <Update /> : <Home /> }
     {/* <Dashboard /> */}
     
     
    </div>
  )
}

export default App
