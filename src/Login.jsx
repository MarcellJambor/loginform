import './App.css';
import { useState } from "react";
import {Link} from "react-router-dom";
import Github from './Assets/github.png';
import Apple from './Assets/apple.png';
import Google from './Assets/google.png';

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className='app'>
        <div className='container'>
      <h1 className='header'>
        Login
      </h1>
      <div className='input'>
        <div className='fields'>
        <form className='form'>
        <input type="email" placeholder='Email' value={email} onChange={handleEmail}/>
        <input type="password" placeholder='Password' value={password} onChange={handlePassword}/>
        <button type='submit'>SignUp</button>
      </form>
      <div className='icons'>
            <img src={Github} alt="github-icon" />
            <img src={Apple} alt="apple-icon" />
            <img src={Google} alt="google-icon" />  
        </div>
        <div className='footer'>
        <p className='small-text'>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Login;
