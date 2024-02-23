import { FcLikePlaceholder } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";
function Card(props){
    return(
        <div className="card-template">
            <img className="card-img" src={props.img}></img>
            <h1 className="card-title">{props.title}</h1>
            <p className="card-price">{props.price}<span className="cardbtn"><FcLikePlaceholder className="like-btn"/><FaRegComment className="comment-btn"/></span> </p>
            
        </div>
    );
}

export default Card