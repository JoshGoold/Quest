import logo from '../assets/art.jpeg'
import { AiOutlineCustomerService } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { BiDonateHeart } from "react-icons/bi";
import { MdOutlineRateReview } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
function Footer(){

    return(
<> 
<hr className="foothr"color="white"></hr>
        <div className="footer">
            <div className="links">
                <nav>
                    <li><a><AiOutlineCustomerService className="csIcon"></AiOutlineCustomerService>Customer Support</a></li>
                    <li><a><RiContactsLine className="csIcon"/>Contact Us</a></li>
                    <li><a><BiDonateHeart className="csIcon" />Donate</a></li>
                    <li><a><MdOutlineRateReview className="csIcon"/>Leave us a Review!</a></li>
                </nav>
            </div>
            <div className="logo">
            <p className="footercopy">&nbsp; &nbsp; Quest &copy; </p>
            </div>
            <div className="socials">
                <ul>
                    <li><FaTwitter className="csIcon"/>Twitter</li>
                    <li><FaFacebookSquare className="csIcon"/>FaceBook</li>
                    <li><FaInstagram className="csIcon"/>Instagram</li>
                    <li><FaYoutube className="csIcon"/>Youtube</li>
                    <li><FaDiscord className="csIcon"/>Discord</li>
                </ul>
            </div>
           
        </div> 
        
        </>
    );

}

export default Footer