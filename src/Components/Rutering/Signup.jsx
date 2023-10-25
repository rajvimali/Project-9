import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [input, setInput] = useState({});
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem('User')) || [];
  });

  useEffect(() => {
    localStorage.setItem('User', JSON.stringify(data));
  }, [data]);

  const isUserExists = (userID) => {
    return data.some(user => user.userID === userID);
  };

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (isUserExists(input.userID)) {
      alert('User already exists. Please choose a different ID.');
    } else if (input.password === input.confirmpassword) {
      await setData([...data, input]);
      navigate("/login");
    } else {
      alert('Password and confirm password do not match. Please try again.');
    }
  };

  return (
    <div className='login'>
      <h1 className='text-center'>SignUp</h1>
      <form onSubmit={handleSignup}>
        <label htmlFor="">Id</label>
        <input type="text" name="userID" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        <label htmlFor="">Password</label>
        <input type="password" name="password" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        <label htmlFor="">Confirm Password</label>
        <input type="password" name="confirmpassword" onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Signup;
