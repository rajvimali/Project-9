import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Nevbar from './Components/Rutering/Nevbar';
import Home from './Components/Rutering/Home';
import Students from './Components/Rutering/Students';
import StudentDetail from './Components/Rutering/StudentDetail';
import Page404 from './Components/Rutering/Page404';
import EditStudent from './Components/Rutering/EditStudent';
import AddStudent from './Components/Rutering/AddStudent';
import Login from './Components/Rutering/Login';
import Signup from './Components/Rutering/Signup';


function App() {
  const [activeUser, setActiveUser] = useState(true)
  return (
    <>

      <BrowserRouter>
        <Nevbar activeUser={activeUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<Students />} />
          <Route path="/student/edit/:id" element={<EditStudent />} />
          <Route path="/student/view/:id" element={<StudentDetail />} />
          <Route path="/student/addstudent" element={<AddStudent />} />
          <Route path="/login" element={<Login activeUser={activeUser} setActiveUser={setActiveUser} />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App