import React from 'react';
import './topbar.css';
import ProfilePic from './profilepic.jpg';
import { Link } from 'react-router-dom';

export default function topbar() {
    const user = false;
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-facebook-f"></i>
            </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className='link'>Home</Link>
                </li>
                <li className="topListItem"><Link to="/" className='link'>About</Link></li>
                <li className="topListItem"><Link to="/" className='link'>Contact</Link></li>
                <li className="topListItem"><Link to="/write" className='link'>Write</Link></li>
                <li className="topListItem">
                    {user && "Logout"}</li>
            </ul>
        </div>
        <div className="topRight">
            {
                user?(
                    <>
                    <img className='topImg' src={ProfilePic} alt="" />
                    <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
                    </>
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                          <Link to="/login" className='link'>Login</Link>
                        </li>
                        <li className="topListItem">
                          <Link to="/register" className='link'>Register</Link>
                        </li>

                    </ul>
                )
            }

        </div>
    </div>
  )
}

