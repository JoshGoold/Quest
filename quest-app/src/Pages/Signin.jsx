import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Animation from '../Animation/Animation.jsx'
import { useNavigate } from 'react-router-dom';
function Signin(){
    const users = JSON.parse(localStorage.getItem('users')) || [];
    var username;
    var password;
    const navigate = useNavigate();

       const handleButtonSignup = () => {
         // Navigate to the desired route
         navigate('/signup');
       };
       const handleButtonRedirect = () => {
              // Navigate to the desired route
              navigate('/home');
            };

    function signIn() {
        username = document.forms["accountlogin"]["accountUserName"].value;
        password = document.forms["accountlogin"]["accountUserPassword"].value;
      
        if (username == "" && password != "") {
          alert("Please insert your username.");
        }
        else if (password == "" && username != "") {
          alert("Please insert your password.");
        } 
        else if (password == "" && username == ""){
          alert("Please fill in all available fields.")
        }
        else if (password.length < 6 && username != "") {
          alert("Password must be at least 6 characters.");
        } else {
          let validUser = false;
          console.log("Username:", username);
          console.log("Password:", password);
          for (let i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
              validUser = true;
              break;
            }
          }
      
          if (validUser) {
            alert("Login successful! Welcome back, " + username);
            handleButtonRedirect();
          }
          else {
            alert("Invalid credentials. Please try again.");
          }
        }
      }
    
    const usericon = <FontAwesomeIcon className="i" icon={faUser} />
    const lockicon = <FontAwesomeIcon className="i" icon={faLock}/>
    return(
      
        <body className="mainindex"> 
            <div class="form-box">
            <br></br>
            <h1 className="setuphead"> Sign In </h1>
            <br></br>
            <form class="accountlogin" id="accountlogin">
                <div class="input-group">
                    <div class="input-field">
                        {usericon}
                        <input type="text" placeHolder="Username" id="accountUserName" className="accountName" required></input>
                    </div>
                    <div class="input-field">
                        {lockicon}
                        <input type="password" placeHolder="Password" id="accountUserPassword" className="accountPassword" required></input>
                        <p> Lost password <a href="#">Click here!</a></p>
                    </div>
                     
                    <div class="btn-group">
                        <button type="button" className="button-shrink" id="signupBtn" onClick={signIn}>Sign in</button>
                    </div>
                   </div>
            
            </form>
            <br></br>
            <div class="btn-signup">
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp;&nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp;&nbsp; 
                        &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;<b>Dont have an account? </b>
                        <button type="button" class="button-shrink" id="signinBtn" onClick={handleButtonSignup}> Sign up</button>
                    </div>
        </div>
    </body>
    
    );
}
export default Signin 