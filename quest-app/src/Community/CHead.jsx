import {useNavigate} from 'react-router-dom'
function Head (){

    const navigate = useNavigate();

    const handleHome = () =>{
        navigate('/home')
    }
    return(
        <>
        <div className="communityhead">
            <div className="panel">
                <ul>
                <h1 className="title">QUEST COMMUNITY</h1>
                    <li>Community</li>
                    <li>Profile</li>
                    <li>Messages</li>
                    <li>Leaderboards</li>
                    <li>Events</li>
                    <li>Community Bounty's</li>
                    <li>Daily Challenges</li>
                    <li>Weekly Challenges</li>
                    <li>Groups</li>
                    <li>Workflows</li>
                    <li>Requests</li>
                    <li>Trending</li>
                    <li>Find Partners</li>
                    <li>Find Connections</li>
                </ul>
            </div>
            <button onClick={handleHome} className="headbtn">Home</button>
            
        </div>
        
        </>
    );
}
export default Head