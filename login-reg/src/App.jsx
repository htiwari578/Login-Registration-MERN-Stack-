
import 'bootstrap/dist/css/bootstrap.css'
import Signup from './signup'
import Login from './login'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './home'
import Dashboard from './dashboard'

function App() {
 

  return (
 <BrowserRouter>
 <Routes>
    <Route path='/' element = {<Home /> } ></Route>
    <Route path='/register' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/dashboard' element={<Dashboard />}></Route>


 </Routes>
 
 
 </BrowserRouter>
    
 
  )
}

export default App
