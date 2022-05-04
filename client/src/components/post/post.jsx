import "./post.css";
import BottleSalad from './Bottle Salad.jpg';

export default function post() {
  return (
    <div className="post">
        <img className="postimage" src={BottleSalad} alt="" />
        <div className="postInfo">
            <div className="postCats">
            <span className="postCat">Breakfast</span>
            <span className="postCat">Lunch</span>
            </div>
        <span className="postTitle">Lorem ipsum dolor</span>
        <hr></hr>
        <span className="postDate">1 Hour ago </span>
        </div>
        <p className="postDes">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dicta, rerum est aut nisi culpa assumenda hic at laboriosam praesentium aspernatur repudiandae omnis quidem laborum distinctio mollitia eius consectetur quia, nostrum illo obcaecati nobis. Mollitia at vel dolore error sequi ad velit ab, necessitatibus corrupti quidem facere ex distinctio itaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse enim blanditiis nobis quos commodi quod similique velit placeat! Id laboriosam vero molestiae pariatur qui, quas minima nemo ipsa mollitia, ullam quis quasi eveniet voluptatem totam, numquam at accusantium rem ut natus! Deleniti aperiam perferendis autem mollitia eveniet nemo repellendus voluptate!</p>
    </div>

  )
}
