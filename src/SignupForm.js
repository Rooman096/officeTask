import Avatar from './Avatarfunction';
import './sample.css';
import {useHistory } from 'react-router-dom';


export default function SignupForm() {
    let history= useHistory();
    function handleClick() {
        history.push("/Mainscreen");
      }
    return (
        
        
    <div class="mini-container" id="login-box">
        <div class="left">
        <h2>Sign up</h2>
    
        <input type="text" name="username" placeholder="Full name" />
        <input type="text" name="profession" placeholder="You are a: Dev, Freelancer, Businessman" />
        <input type="text" name="phone" placeholder="Phone" />
        <input type="text" name="email" placeholder="Email" />
    
        <input onClick={handleClick} type="submit" name="submit_button" value="  Join the wait list  " />
        </div>
  
       <div class="right">
       <h1>Welcome to<br/> our community</h1>
       <p>Integrating innovation, community and providing our members with the best user experience. Sign up  to get access to our key features.</p>
       <Avatar/>
       </div>
     
   </div>
    )
}
