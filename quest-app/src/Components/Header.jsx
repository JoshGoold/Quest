import { TiShoppingCart } from "react-icons/ti";
import { RxDropdownMenu } from "react-icons/rx";
import {useState} from "react";
import {useNavigate} from 'react-router-dom'
function Header() {
 
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  }
  const navigate = useNavigate();

  const handleButtonSignin = () => {
    // Navigate to the desired route
    navigate('/signin');
  };
  const handleButtonSignup = () => {
         // Navigate to the desired route
         navigate('/signup');
       };
  
  return (
    <div className="head">
      <h1 className="head-title">
      <button className="hb"><TiShoppingCart className="icon"/></button>
      <button className="hb" onClick={handleButtonSignin}>Sign In</button>
      <button className="hb" onClick={handleButtonSignup}>Sign Up</button>
      <div className="dopdown-container">
      <RxDropdownMenu onMouseOver={handleDropdownClick} id="ddm"className="dropmenu"/>
      </div>
      </h1>
      
      {showDropdown && (
        
        <select name="Menu" size="5">
        <optgroup>
          <option>About</option>
          <option>Services</option>
          <option>Contact</option>
          <option>Account</option>
          <option>Settings</option>
        </optgroup>
      </select>
      
      )}
    </div>
  );
}

export default Header;
