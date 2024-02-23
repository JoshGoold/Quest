import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
function Slider(props){

    return(
        <div className="carousel">
            <div className="sliderlist">
                <div className="slideritem">
                    <img src={props.img}></img>
                    <div className="slidercontent">
                        <div className="author">{props.author}</div>
                        <div className="slidertitle">{props.title}</div>
                        <div className="slidertopic">{props.category}</div>
                        <div className="des">
                            {props.description}
                        </div>
                        <div className="sliderbuttons">
                            <button className="sb" onClick={props.nav}>SEE MORE</button>
                            <button className="sb">SUBSCRIBE</button>
                        </div>
                        <div className="click">
                        <button onClick={props.lclick}className="slide"><SlArrowLeft className="slide"/></button><button onClick={props.rclick} className="slide"><SlArrowRight className="slide"/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Slider