import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/posts";
import Sidebar from '../../components/SideBar/sideBar';

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
          <Posts/>
          <Sidebar/> 
      </div>
    </>
  )
}
