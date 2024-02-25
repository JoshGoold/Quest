import lea from '../assets/teach.jpeg'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import Card from '../Components/Card.jsx';
import MonthWin from '../Components/MonthWin.jsx'
import winner from '../assets/teachwin.webp'
import SCommunity from '../Components/SCommunity.jsx';
import learncom from '../assets/learncom.jpeg'
import video from '../assets/video.mp4'
import Become from '../Components/Become.jsx';
function Learn() {

       const [post, setPost] = useState([]);
       const [title, setTitle] = useState("");
       const [img, setImg] = useState("");
       const [price, setPrice] = useState("");
       const [postForm, setPostForm] = useState(false);

       function newPost() {
              setPostForm(true);
       }
       function handleTitle(event) {
              setTitle(event.target.value);
       }
       function handleImg(event) {
              const file = event.target.files[0];

              if (file) {
                     const reader = new FileReader();
                     reader.onload = () => {
                            setImg(reader.result)
                     };
                     reader.readAsDataURL(file);
              }
       }
       function handlePrice(event) {
              setPrice(event.target.value);
       }

       const Post = () => {
              const newPost = <Card title={title}
                     img={img}
                     price={price} />;
              setPost(p => [...p, newPost]);
              setPostForm(false);

       }

       const navigate = useNavigate();

       const handleButtonHome = () => {
              // Navigate to the desired route
              navigate('/home');
       };
       const handleButtonCommunity = () => {
              // Navigate to the desired route
              navigate('/community');
       };
       return (
              <>
              <div className="artbody">
                     <header className="arthead">
                            <nav className="artnav">
                                   <a className="artlink " onClick={handleButtonHome}>Home</a>
                                   <a className="artlink " onClick={handleButtonCommunity}>Community</a>
                                   <a className="artlink " href="#">Marketplace</a>
                            </nav>
                     </header>
                     <div className="carousol">
                            <div className="carolist">
                                   <div className="item">
                                   </div>
                                   <div className="item">
                                   </div>
                                   <div className="item">
                                          <img className="caroimg" src={lea}></img>
                                          <div className="carocontent">
                                                 <div className="cauthor">
                                                        <p className="catc">QUEST</p>

                                                        <div className="ctopic">
                                                               <p className="ctop">TEACH</p>
                                                               <div className="cdes">
                                                                      <p className="desc">Welcome to <b>QUEST TEACH</b> create your profile today and join the Teaching Community, gain access to Community Bounty's and access to Quest's online School! Which guarantees a mastery in any subject! Climb your way up the leaderboards, win monthly prizes, compete in tournaments! <b>WELCOME TO QUEST</b></p>
                                                               </div>
                                                               <div className="carobuttons">
                                                                      <button onClick={newPost} className="cbutton">JOIN NOW</button>
                                                                      <button className="cbutton">SUBSCRIBE</button>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>

                            </div>
                            {postForm && (
                                   <form className="LRNpostform">
                                          <label>Post Title: </label>
                                          <input placeholder='Title' onChange={handleTitle} type="text"></input>
                                          <br></br>
                                          <label>Select an Image: </label>
                                          <input onChange={handleImg} type="file"></input>
                                          <br></br>
                                          <label>Price: </label>
                                          <input placeholder='Price' onChange={handlePrice} type="text"></input><br></br>
                                          <button type="button" onClick={Post}>Post</button>
                                   </form>
                            )}
                            <MonthWin 
                            name="George Burnham"
                            img={winner}
                            month="September - October 2024 Winner"
                            rate="4.7"
                            money="Prize money: $100 000"/>
                     </div>
                     <SCommunity img={learncom}
                     title="TEACHING COMMUNITY"
                     message="Step into the vibrant world of the learning community,
                      where curiosity sparks the flame of knowledge and every question 
                      is a stepping stone to growth. Embrace the journey of lifelong 
                      learning, connect with like-minded individuals, and let the 
                      collective pursuit of wisdom empower you to reach new heights. In 
                      this community, every lesson is a bridge to your aspirations, 
                      and together, we build a future shaped by the endless possibilities 
                      of education."/>
                      <Become video={video}
                     title="QUEST TEACH"
                     desc="Master new skills and discover your full potential at our online school. From coding to creativity, we offer diverse courses to elevate your abilities and shape your future success"
                     />
              </div>
              <h1 className="postshead">New Posts</h1>
              <ol>
                            {post.map((p, index) =>
                                   <li key={index}>
                                          {p}</li>)}
                     </ol>
              </>
       );

}
export default Learn