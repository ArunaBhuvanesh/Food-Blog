import './single.css';
import SideBar from '../../components/SideBar/sideBar';
import SinglePost from '../../components/SinglePost/singlePost';

export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div> 
  )
}
