
function Post(props){

    return(
        <div className="communityFeed">
                    
                        <img src={props.pic} ></img>
                        <p>{props.desc}</p>
                        <img className="pro"  src={props.profpic}></img><a className="progadget">View Profile</a>
                        <a>❤️</a>
                        <a>💭</a><input type='text' placeholder='Enter your thoughts here'></input>
                    </div>
    );
}
export default Post