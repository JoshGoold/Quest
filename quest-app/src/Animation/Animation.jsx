
function Animation(props){

    return(
        <div id="planet">
            <div id="text"><h1 className="textcontent">{props.title}</h1></div>
            <div id="satellite"></div>
        </div>
    );
}

export default Animation