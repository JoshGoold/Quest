import pic from '../assets/art.jpeg'
import profilepic from '../assets/designwin.png'
import React, {useState} from 'react'
import Post from './Post.jsx'
import Default from '../assets/default.webp'
function Profile(props){

    const [picture, setPicture] = useState("");
    const profpicture = profilepic;
    const [desc, setDesc] = useState("");


    const [post, setPost] = useState([]);
    const [showCommunity, setShowCommunity] = useState(true);


    const handleDesc = (event) => {
        setDesc(event.target.value);
    }


    const posts = () => {
        const newPost = <Post
                pic={picture}
                profpic={profpicture}
                desc={desc}
                />;
        setPost(p => [...p, newPost]);
        setDesc("");
 }

    function handleImg(event) {
        const file = event.target.files[0];

        if (file) {
               const reader = new FileReader();
               reader.onload = () => {
                      setPicture(reader.result)
               };
               reader.readAsDataURL(file);
        }
 }
    return(
        <>
        <div className="msxbody">
        <div className="profilehead">
            <div className="coverimg">
                <img src={pic}></img>
                <div className="profilepic">
                    <img src={profpicture} alt="" />
                </div>
            </div>
             <div className="headcount">
                    <button>Edit Profile</button>
                    <button>Settings</button>
                    <br></br>
                    <a>0</a><span >Partners</span>
                    <a>0</a><span>Connections</span>
                </div>
                
                </div>
              
            <br></br>
            <div className='uipost'>
               <img src={Default}></img> <input className='submission' onChange={handleDesc} value={desc} placeholder="What would you like to say?" type="text"></input><button onClick={posts}>+</button><input onChange={handleImg} className='insertimg' type='file'></input>
            </div>
            <br></br>
              {showCommunity && post.map((p, index) =>
                                   <li key={index}>
                                          {p}</li>)}
        </div>
        
                </>
    );
}

export default Profile