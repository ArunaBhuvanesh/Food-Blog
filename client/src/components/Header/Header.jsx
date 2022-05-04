import React from 'react';
import './Header.css';
import bgPic from './backgroundpic.jpg';

export default function () {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSmall">React & Node</span>
            <span className="headerTitleLarge">Blog</span>
        </div>
        <img className="headerImg" src={bgPic} alt="" />
    </div>
  )
}
