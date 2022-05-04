import './setings.css';
import SideBar from '../../components/SideBar/sideBar';
import profilepic from '../../components/topbar/profilepic.jpg'

export default function settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className='settingsForm'>
                <label>Profile Picture</label>
                <div className="settingsProfilePic">
                    <img src={profilepic} />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                </div>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <label>User Name</label>
                <input type="text" placeholder='Aruna' />
                <label>User Email</label>
                <input type="email" placeholder='ArunaBhuvanesh@gmail.com' />
                <label>Password</label>
                <input type="text"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <SideBar/>
    </div>
  )
}
