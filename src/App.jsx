
import './App.css'
import {  BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react'

// Components list for Each pages
import { Home } from './components/styles/home/home'
import { SignUp } from './components/signUp/signUp'
import { Login } from './components/login/login'
import { Verify } from './components/verification/verify'
import { Update } from './components/update/update'
import { Dashboard } from './components/dashboard/dashboard'
import { Profile } from './components/dashboard/profile/profile'
import { Projects } from './components/dashboard/projects/projects'


const App =()=> {

  const [status, setStatus] = useState(false)
  const change =()=> setStatus(true)

useEffect(()=>{
  setTimeout(change, 6000)
}, [])


  return (
    <div className="App">
     {/* {status ? <SignUp /> : <Home /> } */}
     {/* <Dashboard /> */}
     <Router>
       <Routes>
         <Route path="/" element={status ? <SignUp /> : <Home /> } />
         <Route path="/login" element={<Login />} />
         <Route path="/verify" element={<Verify />} />
         <Route path="/verifyemail" element={<Update/> } />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/projects" element={<Projects />} />
       </Routes>
     </Router>
     {/* <Verify /> */}
     
     
    </div>
  )
}

export default App
