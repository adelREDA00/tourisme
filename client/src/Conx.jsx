import React from 'react'
import {  useState,useContext } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';
import axios from "axios";



const Conx = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { loading, error, dispatch } = useContext(AuthContext);


    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
   
      };

      const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

      };

      const handleClick = async (e) => {
        e.preventDefault();
       try{
        const res = await axios.post("http://localhost:5000/api/auth/connexion", {
            username,
            password,
          });

        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        dispatch({ type: "SET_TOKEN", payload: res.data.token });
        localStorage.setItem("token", res.data.token);
        navigate("/");
       }catch(err){
        console.log(err.response.data);
       }
      
      };


  return (
    <form className="form">
  <div className="flex-column">
      <label>Username </label></div>
      <div className="inputForm">
      <Icon className='usericon' icon="ph:user-thin" />
        <input type="text" onChange={handleUsernameChange} value={username} className="input" placeholder="Enter your username"/>
      </div>
    
      <div className="flex-column">
      <label>Password </label></div>
      <div className="inputForm">
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"></path><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"></path></svg>        
        <input type="password" onChange={handlePasswordChange} value={password} className="input" placeholder="Enter your Password"/>
        <svg viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"></path></svg>
      </div>
    
    <div className="flex-row">
      <div>
      <input type="checkbox"/>
      <label>Remember me </label>
      </div>
      <span className="span">Forgot password?</span>
    </div>
    <button onClick={handleClick} className="button-submit">connexion</button>
    <p className="p">Vous n'avez pas de compte ?  <Link to={`/register`}  className="span" > inscription</Link>

    </p>

    {/* <div className="flex-row">
  

</div> */}
</form>
  )
}

export default Conx