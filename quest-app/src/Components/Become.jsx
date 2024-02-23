
function Become(props){

    return(
 
        <div className="Becomebox">
            <video mute autoPlay loop>
                <source src={props.video}></source>
            </video>
            <div className="content">
                <h1 className="conthead">{props.title}</h1>
                <p className="contdes">{props.desc}</p>
                <button className="contbtn">BEGIN TODAY</button>
            </div>

        </div>
    );


}

export default Become