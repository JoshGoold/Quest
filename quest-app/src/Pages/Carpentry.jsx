import Carp from '../assets/carpentry.jpeg'
import Card from '../Components/Card.jsx';
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import MonthWin from '../Components/MonthWin.jsx'
import winner from '../assets/carpwin.jpeg'
import SCommunity from '../Components/SCommunity.jsx';
import carp2 from '../assets/carp2.jpeg'
import Become from '../Components/Become.jsx';
import video from '../assets/video.mp4'
function Carpentry() {


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
                                          <img className="caroimg" src={Carp}></img>
                                          <div className="carocontent">
                                                 <div className="cauthor">
                                                        <p className="catc">MONTHLY WINNER</p>

                                                        <div className="ctopic">
                                                               <p className="ctop">CARPENTRY</p>
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
                                   <form className="CRPpostform">
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
                            name="Henry Davis"
                            img={winner}
                            month="September - October 2024 Winner"
                            rate="4.8"
                            money="Prize money: $100 000"/>
                            
                     </div>
                     <SCommunity img={carp2}
                            title="CARPENTRY COMMUNITY"
                            message="Unlock the door to craftsmanship and join our carpentry 
                            community a space where every cut, every joint, and every creation 
                            tells a unique story. Together, we build not just structures but 
                            dreams, fostering a community that empowers each artisan to transform
                            raw materials into enduring works of art. Join us, where every sawdust 
                            particle echoes the passion for craftsmanship, and let's carve out a 
                            future filled with innovation and solidarity."/>
                     <Become video={video}
                     title="LEARN CARPENTRY"
                     desc="Craft your skills with precision in our online carpentry course. Learn the art of woodworking and transform raw materials into functional and beautiful creations."
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
export default Carpentry