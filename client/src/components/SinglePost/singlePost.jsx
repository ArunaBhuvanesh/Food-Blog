import './singlePost.css';
import singleimg from '../../components/post/Coffee.jpg';

export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className="singlepostWrapper">
            <img src={singleimg} alt="" className="singlePostimage" />
            <h1 className="singlePostTitle">
                My Favorite cappuccino</h1>
            <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author:<b>Aruna</b></span>
                <span className="singlePostDate">1 hour Ago</span>
            </div>
            <p className='singlePostDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, deserunt ex delectus, culpa voluptas similique facilis perferendis aspernatur consequuntur amet omnis minus, aut sunt cumque pariatur ducimus sint perspiciatis commodi cum soluta nihil eaque. Error neque ab, nostrum facere libero vitae mollitia repudiandae voluptates eius vel quod veniam pariatur commodi autem non facilis, magni dolores beatae eveniet consectetur consequatur? A temporibus officiis ea nulla blanditiis! Sit similique, eligendi vitae pariatur mollitia id nam molestias, placeat veniam, temporibus eos earum quidem necessitatibus iure voluptatum dicta animi sint! Eos, cum voluptatibus odit beatae suscipit molestias consequatur facilis doloremque quia officiis dignissimos aspernatur?</p>
        </div> 
    </div>
  )
}
 