import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function Nevbar({activeUser}) {
  const [flag,setFlag] = useState(false)

  useEffect(()=>{
    const foundUser = JSON.parse(localStorage.getItem('activeuser'))
      if(foundUser){
        setFlag(true)
      }else{
        setFlag(false)
      }
  },[activeUser])
  const navigate = useNavigate();
  const handleLogout = () =>{
    localStorage.removeItem("activeuser");
    navigate("/login");
  }
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class=" ">
          <Link to={"/"} class="navbar-brand nav-link" >Home</Link>
        </li>
        {flag ? <><li class="">
        <Link to={"/student"} class="nav-link" >StudentList</Link>
        </li>
        <li class="nav-item">
        <a href="" className='nav-item nav-link' onClick={handleLogout}>Logout</a>
        </li> </> :<>
        <li class="nav-item">
        <Link to={"/login"} class="nav-link" >Login</Link>
        </li>
        <li class="nav-item">
        <Link to={"/signup"} class="nav-link" >Signup</Link>
        </li></>

        }
        
        {/* <li class="">
        <Link to={"/student"} class="nav-link" >StudentList</Link>
        </li>
        <li class="nav-item">
        <a href="" className='nav-item nav-link' onClick={handleLogout}>Logout</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
  )
}
