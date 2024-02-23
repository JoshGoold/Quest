import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

function Signup(){

    const navigate = useNavigate();

       const handleButtonSignin = () => {
         // Navigate to the desired route
         navigate('/signin');
       };
       const handleButtonRedirect = () => {
              // Navigate to the desired route
              navigate('/signin');
            };

    const users = JSON.parse(localStorage.getItem('users')) || [];
    var username;
    var email;
    var password;
    
    
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)*[a-zA-Z]{2,}))$/;
    
    
    const validateEmailComprehensive = (email) => {
      return re.test(email);
    };
    function createUser(username, email, password) {
      const user = { username, email, password };
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
    
    function signUp() {
      username = document.forms["accountcreate"]["accountName"].value;
      email = document.forms["accountcreate"]["accountEmail"].value;
      password = document.forms["accountcreate"]["accountPassword"].value;
    
      if (username == "" && email == "" && password == "") {
        alert("Please fill in all availble fields.");
      } else if (password.length < 6 && username != "" && email != "") {
        alert("Password must be at least 6 characters.");
      } else if (!validateEmailComprehensive(email) && email != "") {
        alert("Please insert a valid Email adress.");
      } else {
        createUser(username, email, password);
        console.log("Users: ",users)
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        
        alert("Account created successfuly!");
        handleButtonRedirect();
      }
    }

      

  const usericon = <FontAwesomeIcon className="i" icon={faUser} />
  const envolopeicon = <FontAwesomeIcon className="i" icon={faEnvelope}/>
  const lockicon = <FontAwesomeIcon className="i" icon={faLock}/>
    return(
     
       <body className="mainindex">
        
            <div class="form-box">
                <h1 className="setuphead"> Sign Up </h1>
                    <form class="accountcreate" id="accountcreate">
                        <div class="input-group">
                            <div class="input-field">
                            {usericon}
                                <input type="text" placeHolder="Username" id="accountName" className="accountName" required></input>
                            </div>
                         <div class="input-field">
                                {envolopeicon}
                                <input type="email" placeHolder="Email" id="accountEmail" className="accountEmail" required></input>
                        </div>
                            <div class="input-field">
                            {lockicon}
                            <input type="password" placeHolder="Password" id="accountPassword" className="accountPassword" required></input>
                        </div>
                            <br></br>
                        <div class="btn-group">
                            <button type="button" className="button-shrink" id="signupBtn" onClick={signUp}>Create Account</button>
                        </div>
                        <br></br>
                        <div class="btn-signin">
                            
                            &nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp;&nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp;&nbsp; 
                            &nbsp; &nbsp;&nbsp; &nbsp;
                            &nbsp;  <b>Have an account already? </b>
                        <button type="button" className="button-shrink" id="signinBtn" onClick={handleButtonSignin}> Sign in</button>
                    </div>
                </div>
            </form>
        </div>
       </body>

    );
}
export default Signup 