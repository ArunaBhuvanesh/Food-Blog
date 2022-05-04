import './login.css';
import { Link } from 'react-router-dom';
import Register from '../Register/Register';

export default function login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="email" className="loginInput" placeholder='Enter your email' />
            <label>Password</label>
            <input type="email" className='loginInput' placeholder='Enter your password' />
            <button className="loginButton">Login</button>
        </form>
        <button classame="loginRegisterButton">Register</button>
    </div>
  )
}
