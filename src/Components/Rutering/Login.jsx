import React, { useState, useEffect } from 'react';
import './pr8.css'
import { useNavigate } from 'react-router-dom';


export default function Login({activeUser,setActiveUser}) {
  // Signup
  const [input, setInput] = useState({});
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem('User')) || [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(data));
  }, [data]);

  // const isUserExists = (userID) => {
  //   return data.some(user => user.userID === userID);
  // };

  // const handleSignup = (e) => {
  //   e.preventDefault();
  //   if (isUserExists(input.userID)) {
  //     alert('User already exists. Please choose a different ID.');
  //   } else if (input.password === input.confirmpassword) {
  //     setData([...data, input]);
  //     alert('Account created successfully!');
      
  //   } else {
  //     alert('Password and confirm password do not match. Please try again.');
  //   }
  // };

  // Login
  const [userInput, setUserInput] = useState({});
  const handleCheck = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = data.find(user => user.userID === userInput.userID && user.password === userInput.password);

    if (foundUser) {
      // alert('Login Successful!');
      const auser = userInput.userID;
      localStorage.setItem('activeuser', JSON.stringify(auser));
      setActiveUser(false)
      navigate("/student");

    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className='login'>
      <h1 className='text-center'>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="">Id</label>
        <input type="text" name="userID" onChange={handleCheck} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={handleCheck} />
        <button type="submit">Submit</button>
      </form>

      {/* <h1 className='text-center'>SignUp</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="">Id</label>
        <input type="text" name="userID" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="confirmpassword" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}


