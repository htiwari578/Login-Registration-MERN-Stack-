import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signup = () => {

    const [name , setName] =  useState('');
    const[email, setEmail] = useState('');
    const[password ,setPassword] = useState('');

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3005/register', {name, email, password})
        .then(res => {
            navigate('/login')
        }).catch(err => console.log(err))
    }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-4">
            <h2 className="text-center">Register</h2>
            <form onSubmit= {handleSubmit}>
                <div className="mb-3">
                    <label htmlFor ="name">
                        <strong>Name</strong>

                    </label>
                    <input 
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    className="form-control rounded-0"
                    onChange= {(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor ="email">
                        <strong>Email</strong>

                    </label>
                    <input 
                    type="text"
                    placeholder="Enter email"
                    value={email}
                    className="form-control roundec-0"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor ="password">
                        <strong>Password</strong>

                    </label>
                    <input 
                    type="text"
                    placeholder="Enter password"
                    value={password}
                    className="form-control roundec-0"
                    onChange= {(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-danger w-100 rounded-0">Register</button>
                <p>already have an account</p>
                <Link to ='/login' className="btn btn-success w-100 rounded-0 ">Login</Link>
            </form>
        </div>
    </div>
  
  );
    
  
}




              

export default Signup;



