function SCommunity(props){

    return(

        <div className="scomm">
            <img src={props.img} className="scommImg"></img>
            
            <h1 className="scommTitle">{props.title}</h1>
            <p className="scommMessage">{props.message}</p>
            
            <button className="scommButton">JOIN NOW</button>
           
        </div>
    );
}

export default SCommunity