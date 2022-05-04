import './write.css';
import Pancake from '../../components/post/pancake.jpg';

export default function write() {
  return (
    <div className='write'>
        <img className="writeImg" src={Pancake} alt="" />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file"id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Lets cook something new..." type="text" className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
