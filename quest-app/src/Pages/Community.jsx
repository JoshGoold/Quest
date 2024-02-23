import Header from '../Components/Header.jsx'
import Animation from '../Animation/Animation.jsx'
import Navigation from '../Components/Navigation.jsx'
import { useNavigate } from 'react-router-dom';
function Community(){
    const navigate = useNavigate();

    const handleButtonHome = () => {
      // Navigate to the desired route
      navigate('/home');
    };
    return(
        <>
        <Header />
        <Animation title="Community"/>
        <Navigation toggle="Home" linktoggle={handleButtonHome}/>
        </>
    );

}

export default Community