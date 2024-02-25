import fin from '../assets/finance.webp'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import Card from '../Components/Card.jsx';
import MonthWin from '../Components/MonthWin.jsx'
import winner from '../assets/financewin.jpeg'
import SCommunity from '../Components/SCommunity.jsx';
import financeback from '../assets/financeback.png'
import Become from '../Components/Become.jsx';
import video from '../assets/video.mp4'
function Finance() {
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
                                          <img className="caroimg" src={fin}></img>
                                          <div className="carocontent">
                                                 <div className="cauthor">
                                                        <p className="catc">QUEST</p>

                                                        <div className="ctopic">
                                                               <p className="ctop">FINANCE</p>
                                                               <div className="cdes">
                                                                      <p className="desc">Welcome to <b>QUEST FINANCE</b> create your profile today and join the Finance Community, gain access to Community Bounty's and access to Quest's online School! Which guarantees a mastery in any subject! Climb your way up the leaderboards, win monthly prizes, compete in tournaments! <b>WELCOME TO QUEST</b></p>
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
                                   <form className="FNCpostform">
                                          <label>Post Title: </label>
                                          <input placeholder='Title' onChange={handleTitle} type="text"></input>
                                          <br></br>
                                          <label>Select an Image: </label>
                                          <input onChange={handleImg} type="file"></input>
                                          <br></br>
                                          <label>Price: </label>
                                          <input placeholder='Price' onChange={handlePrice} type="text"></input><br></br>
                                          <button type="button" onClick={Post}>Post</button>
                                   </form>)}
                                   <MonthWin 
                            name="Bob Dillion"
                            img={winner}
                            month="September - October 2024 Winner"
                            rate="5"
                            money="Prize money: $100 000"/>
                     </div>
                     <SCommunity img={financeback}
                     title="FINANCE COMMUNITY"
                     message="Embark on a transformative journey by joining 
                     the finance community, where every number tells a story,
                      and every decision shapes the future. Unleash your potential, 
                      empower yourself with financial knowledge, and be part of 
                      a dynamic network driving positive change and prosperity. 
                      Together, let's redefine possibilities and build a brighter, 
                      financially savvy tomorrow!" />
                      <Become video={video}
                     title="LEARN FINANCE"
                     desc="Unlock financial expertise with our online finance course. Learn essential skills, from budgeting to investment strategies, and take control of your financial future"
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
export default Finance