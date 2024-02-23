import Card from '../Components/Card.jsx'
import Header from '../Components/Header.jsx'
import p1 from '../assets/airforce1.png'
import p2 from '../assets/whiteshirt.jpeg'
import Animation from '../Animation/Animation.jsx'
import Navigation from '../Components/Navigation.jsx'
import Slides from '../Slider/Slides.jsx'
import {useNavigate} from 'react-router-dom'
import background from '../assets/back.jpeg'
import Goal from '../Components/Goal.jsx'
import Footer from '../Components/Footer.jsx'
import Quote from '../Components/Quote.jsx'
import Scroller from '../Components/Scroller.jsx'
function Home() {


  const navigate = useNavigate();

  const handleButtonCommunity = () => {
    // Navigate to the desired route
    navigate('/community');
  };

  return(
    <>
      <Header />
      <Animation title="Quest"/>    
      <Navigation toggle="Community" linktoggle={handleButtonCommunity}/>
      <Slides />
      <Goal />
      <Quote />
      <Scroller />
      <Footer />
      </>
  );
}

export default Home