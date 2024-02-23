import img from '../assets/quoteimg.jpeg'
function Quote(){

    return(
        <div className="quote">
            <div className="quotecontent"> 
                <h1>Begin your Quest Today</h1>
                <p>Embark on a transformative journey with Quest, where innovation meets passion. Join us in shaping a future of endless possibilities and make a meaningful impact on the world.</p>
            </div>
            <img src={img}></img>
        </div>
    );
}

export default Quote