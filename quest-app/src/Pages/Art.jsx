import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import art from '../assets/art.jpeg';
import Card from '../Components/Card.jsx';
import MonthWin from '../Components/MonthWin.jsx';
import winner from '../assets/artwin.avif';
import SCommunity from '../Components/SCommunity.jsx'
import artcomun from '../assets/artcomun.jpeg'
import Become from '../Components/Become.jsx';
import video from '../assets/video.mp4'

function Art() {

       const [post, setPost] = useState([]);
       const [title, setTitle] = useState("");
       const [img, setImg] = useState("");
       const [price, setPrice] = useState("");
       const [postForm, setPostForm] = useState(false);

       function newPost() {
              setPostForm(true);

       }
       function handleCancle() {
              setPostForm(false);
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
                            <button onClick={newPost} className="cbutton">POST</button>
                     </header>
                     <div className="carousol">
                            <div className="carolist">
                                   <div className="item">
                                          <img className="caroimg" src={art}></img>
                                          <div className="carocontent">
                                                 <div className="cauthor">
                                                        <p className="catc">QUEST</p>

                                                        <div className="ctopic">
                                                               <p className="ctop">ART</p>
                                                               <div className="cdes">
                                                                      <p className="desc">Welcome to <b>QUEST ART</b> create your profile today and join the Art Community, gain access to Community Bounty's and access to Quest's online School! Which guarantees a mastery in any subject! Climb your way up the leaderboards, win monthly prizes, compete in tournaments! <b>WELCOME TO QUEST</b></p>
                                                               </div>
                                                               <div className="carobuttons">

                                                                      <button className="cbutton">SUBSCRIBE</button>
                                                                      <button className="cbutton">JOIN NOW</button>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>
                            </div>
                            {postForm && (
                                   <form className="ARTpostform">
                                          <label>Post Title: </label>
                                          <input placeholder='Title' onChange={handleTitle} type="text"></input>
                                          <br></br>
                                          <label>Select an Image: </label>
                                          <input onChange={handleImg} type="file"></input>
                                          <br></br>
                                          <label>Price: </label>
                                          <input placeholder='Price' onChange={handlePrice} type="text"></input><br></br>
                                          <button type="button" onClick={Post}>Post</button><button type="button" onClick={handleCancle}>Cancel</button>
                                   </form>
                            )}
                            <MonthWin img={winner}
                                   month="September - October 2024 Winner"
                                   name="Jayia Reid"
                                   money="Prize money: $100 000"
                                   rate="5.0"
                            />
                     </div>


                    
                      <SCommunity img={artcomun}
                      title="ART COMMUNITY"
                      message="Embrace the vibrant world of art,
                       where creativity knows no bounds! Join our 
                       art community, a haven for inspiration and 
                       collaboration. Unleash your imagination, connect 
                       with fellow artists, and together, let's paint
                       a masterpiece of shared passion and boundless expression.
                        Your unique voice awaits in the symphony 
                        of colors and ideas. Join us today and be 
                        part of a community that celebrates the
                         extraordinary in every stroke!"/>     
                         <Become video={video}
                     title="LEARN ART"
                     desc="Unleash your creativity with our online art course. Discover diverse mediums and techniques while expressing your unique artistic voice."
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

export default Art