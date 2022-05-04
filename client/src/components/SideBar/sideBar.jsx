import './sideBar.css';
import profilepic from '../topbar/profilepic.jpg'


export default function sideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebaritem">
            <div className="sidebartitle">ABOUT ME</div>
            <img className='sidebarimg' src={profilepic} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia inventore amet eaque fugiat modi sit odio nihil repudiandae error! Assumenda iure odit ratione atque autem velit possimus harum quasi vitae!
            </p>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Breakfast</li>
            <li className="sidebarListItem">Lunch</li>
            <li className="sidebarListItem">Dinner</li>
            <li className="sidebarListItem">Baking</li>
            <li className="sidebarListItem">Dessert</li>
            <li className="sidebarListItem">Lunch Box</li>
            </ul>
        </div>
        <div className="sidebaritem">
        <span className="sidebartitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-facebook-f"></i>
        </div>
        </div>


        
    </div>
  )
}
