import prog from '../assets/programming.png'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import Card from '../Components/Card.jsx';
import MonthWin from '../Components/MonthWin.jsx'
import winner from '../assets/programwin.webp'
import SCommunity from '../Components/SCommunity.jsx';
import programback from '../assets/programback.jpeg';
import Become from '../Components/Become.jsx'
import video from '../assets/video.mp4'
function Programmer() {

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
                                          <img className="caroimg" src={prog}></img>
                                          <div className="carocontent">
                                                 <div className="cauthor">
                                                        <p className="catc">MONTHLY WINNER</p>

                                                        <div className="ctopic">
                                                               <p className="ctop">PROGRAMMER</p>
                                                               <div className="cdes">
                                                                      <p className="desc">Art is a visual object or experience consciously created through an expression of skill or imagination. It encompasses diverse media such as painting, sculpture, printmaking, drawing, decorative arts, photography, and installation</p>
                                                               </div>
                                                               <div className="carobuttons">
                                                                      <button onClick={newPost} className="cbutton">POST</button>
                                                                      <button className="cbutton">SUBSCRIBE</button>
                                                               </div>
                                                        </div>
                                                 </div>
                                          </div>
                                   </div>

                            </div>
                            {postForm && (
                                   <form className="PRGpostform">
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
                            name="Mark Zuckerberg"
                            img={winner}
                            month="September - October 2024 Winner"
                            rate="4.9"
                            money="Prize money: $100 000"/>
                     </div>
                     <SCommunity img={programback}
                     title="PROGRAMMING COMMUNITY"
                     message="Step into the boundless world of programming and unlock 
                     the doors to innovation, endless possibilities, and personal growth. 
                     Join the vibrant programming community where every line of 
                     code is a canvas for your creativity, and every challenge is an
                      opportunity to excel. Embrace the power to shape the digital landscape, 
                      connect with like-minded visionaries, and let your passion for coding
                       propel you towards a future of limitless achievement and impact!"/>
              </div>
              <Become video={video}
                     title="LEARN PROGRAMMING"
                     desc="Master coding at your own pace with our online programming course. Bite-sized lessons, real-world projects, and expert guidance to elevate your coding skills."
                     />
              <h1 className="postshead">New Posts</h1>
              <ol>
                            {post.map((p, index) =>
                                   <li key={index}>
                                          {p}</li>)}
                     </ol>
              </>
       );

}
export default Programmer