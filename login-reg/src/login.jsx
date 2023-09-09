import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Login = () => {
 
 
  const[email, setEmail] = useState();
  const[password ,setPassword] = useState();

  const navigate = useNavigate()

axios.defaults.withCredentials = true;
const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3005/login', {email, password})
    .then(res => {
        console.log("login: " + res.data);
        if(res.data.Status === "Success") {
            if(res.data.role === "admin") {
                navigate('/dashboard')
            } else {
                navigate('/')
            }
        }
    }).catch(err => console.log(err))
}
return (
  <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4">
          <h2 className="text-center">Login</h2>
          <form onSubmit= {handleSubmit}>
              <div className="mb-3">
                  <label htmlFor ="name">
                      <strong>Email</strong>

                  </label>
                  <input 
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  className="form-control rounded-0"
                  onChange= {(e) => setEmail(e.target.value)}
                  />
              </div>
             
              <div className="mb-3">
                  <label htmlFor ="password">
                      <strong>Password</strong>

                  </label>
                  <input 
                  type="text"
                  placeholder="Enter password"
                  name="password"
                  className="form-control roundec-0"
                  onChange= {(e) => setPassword(e.target.value)}
                  />
              </div>
              <button type="submit" className="btn btn-success w-100 rounded-0">
                Login</button>
             </form>
              <p>already have an account</p>
              <Link to ='/register' className="btn btn-danger w-100 rounded-0 ">Signup</Link>
        
      </div>
  </div>

);
  

}



export default Login