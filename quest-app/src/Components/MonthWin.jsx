import { IoIosStar } from "react-icons/io";
import React, {useState} from 'react';
function MonthWin(props){

    const [display, setDisplay] = useState(true);

    function handleClose(){
        setDisplay(false);
    }

return(
    <>
{display && (
 <div className="monthlywinner">
    <h1>Monthly Winner</h1>
    <img src={props.img} className="winnerpicture"></img>
    <p className="winnerdescription">{props.month}</p>
    <h1 className="winnername">{props.name}</h1>
    <p className="winnermoney">{props.money}</p>
    <span className="winnerrating"><IoIosStar className="starrate"/> {props.rate}</span>
    <button className="viewwinner">View Profile</button>
    <button onClick={handleClose} className="closed"> - </button>
</div>
)}

</>
);
}
export default MonthWin