import React,{useState} from 'react'
import Navbar from './Navbar';
const Feedback = () => {
    const [text, setText] = useState("")
    const handleChange = (e)=>{
        setText(e.target.value);
    }
    const handleSubmit = (e)=>{
        
    }
    return (
    <div className='feed-main login-main'>
        <Navbar/>
        <h1>How are we doing???</h1>
        <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="feed form-control"
              id="feed"
              name="feed"
              value={text}
              onChange={handleChange}
            />
        </form>
        <button type="submit" className="btn btn-primary">
        Submit
        </button>
    </div>
  )
};

export default Feedback