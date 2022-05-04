import './Register.css';
import { Link } from 'react-router-dom';
import Login from '../Login/login';

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>User Name</label>
            <input type="text" className="registerInput" placeholder='Enter your name' />
            <label>Email</label>
            <input type="email" className="registerInput" placeholder='Enter your email' />
            <label>Password</label>
            <input type="email" className='registerInput' placeholder='Enter your password' />
            <button className="registerButton">Register</button>
        </form>
        <button classame="registerLoginButton">Login
        </button>
    </div>
  )
}
