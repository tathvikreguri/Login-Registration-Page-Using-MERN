import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const LogInPage = () => {
  const [loginData,setLoginData]=useState({
           username:'',
           password:'',
  });

//submit function
const handleLoginSubmit=async(e)=>{
  e.preventDefault();
  try{
    const response=await axios.post('http://localhost:8000/login',loginData);
   

    const {success,message}=response.data;
    if (success){
      console.log("login successfull");
    }
    else{
        console.log(message);
    }
  }
  catch(error){
    console.error('Login error',error)
  }
  setLoginData({
    username:'',
    password:''
  })
  }


  const handleLoginChange=(e)=>{
//console.log(e);
const {name,value}=e.target;
setLoginData((prevData)=>({
  ...prevData,
  [name]:value
}))
  }


  return (
    <div>
      <h1>LogIn Page</h1>
      <form onSubmit={handleLoginSubmit}>
      <input type='text' name='username' placeholder='Username'  value={loginData.username} onChange={handleLoginChange} required/>
      <input type='password' name='password' placeholder='password'  value={loginData.password} onChange={handleLoginChange} required/>
      <button type='submit'>LogIn</button>
      <p>Not Registered yet?<Link to='/registration'>Register Here</Link></p>
      </form>
    </div>
  )
}

export default LogInPage;
