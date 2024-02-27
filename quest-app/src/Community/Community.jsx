import Header from '../Components/Header.jsx'
import Animation from '../Animation/Animation.jsx'
import Navigation from '../Components/Navigation.jsx'
import Head from './CHead.jsx'
import Profile from './Profile.jsx'
import { useNavigate } from 'react-router-dom';
function Community(){
    const navigate = useNavigate();

    const handleButtonHome = () => {
      // Navigate to the desired route
      navigate('/home');
    };
    return(
        <>
          <Head />
          <Profile />
       </> 
    );

}

export default Community