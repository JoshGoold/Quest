import mus from '../assets/music.jpeg'
import { useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import Card from '../Components/Card.jsx';
import MonthWin from '../Components/MonthWin.jsx'
import winner from '../assets/musicwin.webp'
import SCommunity from '../Components/SCommunity.jsx';
import musicback from '../assets/musiccom.jpeg'
import video from '../assets/video.mp4'
import Become from '../Components/Become.jsx'
function Music() {
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
                                          <img className="caroimg" src={mus}></img>
                                          <div className="carocontent">
                                                 <div className="cauthor">
                                                        <p className="catc">MONTHLY WINNER</p>

                                                        <div className="ctopic">
                                                               <p className="ctop">MUSIC</p>
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
                                   <form className="MSCpostform">
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
                            name="Kanye West"
                            img={winner}
                            month="September - October 2024 Winner"
                            rate="5.0"
                            money="Prize money: $100 000"/>
                     </div>
                    <SCommunity img={musicback}
                    title="MUSIC COMMUNITY"
                    message="Embrace the harmonious journey of 
                    self-expression and connection by joining the music community, where every 
                    note is a heartbeat and every melody carries the power to unite souls. 
                    Whether you're a creator or a listener, become part of a collective symphony 
                    that transcends boundaries, celebrates diversity, and fosters a culture of 
                    inspiration and joy. In the music community, your unique voice resonates, 
                    and together, we compose a tapestry of shared emotions that 
                    enriches the human experience." />
                     <Become video={video}
                     title="LEARN MUSIC"
                     desc="Unlock your musical potential with our online music course. Learn from industry experts, explore diverse genres, and unleash your creativity in a dynamic virtual environment."
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
export default Music