import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';


export default function Students() {
  const [StudentList, setStudentList] = useState(JSON.parse(localStorage.getItem("studentlist")))
  const [student, setStudent] = useState(StudentList);
  const [data, setData] = useState(student);
  useEffect(() => {
    setData(student);
  }, [data]);

  const handleSearch = (e) => {
    const name = e.target.value
    const NewList = StudentList.filter((item) => item.stname.toLocaleLowerCase().includes(name.toLocaleLowerCase()))
    setStudent(NewList)
  }
  const handleFilter = (e) => {
    const gender = e.target.value
    if (gender == 'both') {
      setStudent(StudentList)
    } else {
      const NewList = StudentList.filter((item) => {
        if (item.gender.toLocaleLowerCase() == gender.toLocaleLowerCase()) {
          return item
        }
      })
      setStudent(NewList)
    }
  }
  const handleSort = (e) => {
    const sortt = e.target.value

    if (sortt == "name") {
      const NewList = [...student].sort((x, y) => (x.stname > y.stname ? 1 : -1))
      setStudent(NewList)
    }
    if (sortt == "mark") {
      const NewList = [...student].sort((x, y) => (x.maths - y.maths))
      setStudent(NewList)
    }
    if (sortt == "emark") {
      const NewList = [...student].sort((x, y) => (x.english - y.english))
      setStudent(NewList)
    }
    if (sortt == "smark") {
      const NewList = [...student].sort((x, y) => (x.scince - y.scince))
      setStudent(NewList)
    }
    if (sortt == "cmark") {
      const NewList = [...student].sort((x, y) => (x.computer - y.computer))
      setStudent(NewList)
    }
    if (sortt == "address") {
      const NewList = [...student].sort((x, y) => (x.address > y.address ? 1 : -1))
      setStudent(NewList)
    }

  }



  const handleDelete = (e, id) => {
    e.preventDefault();
    StudentList.splice(id, 1);
    localStorage.setItem("studentlist", JSON.stringify(StudentList));
    setData([student])
  }

  return (
    <div class="list p-3">
      <h2 class="text-center fw-bolder  mt-3 border-bottom">Students List</h2>
      <div className='filter text-center d-flex align-items-center justify-content-between m-3'>
        <Link className='btn btn-primary  me-2' to={`/student/addstudent`}>Add Student</Link>
        <div>
          <input type="radio" name="gender" id="" value="male" className='p-2' onChange={handleFilter} />
          <label htmlFor="" className='p-2 text-muted'>Male</label>
          <input type="radio" name="gender" id="" value="female" className='p-2' onChange={handleFilter} />
          <label htmlFor="" className='p-2 text-muted'>Female</label>
          <input type="radio" name="gender" id="" value="both" className='p-2' onChange={handleFilter} />
          <label htmlFor="" className='p-2 text-muted'>Both</label>
        </div>
        <input type="text" id="" placeholder='Search by Name...' onChange={handleSearch} />
        <select className="p-2  text-muted" onChange={handleSort} >
          <option defaultValue>Shot by ...</option>
          <option value="name">Name</option>
          <option value="mark">Maths Mark</option>
          <option value="emark">English Mark</option>
          <option value="smark">Scince Mark</option>
          <option value="cmark">Computer Mark</option>
          <option value="address">Adress</option>
        </select>
      </div>
      <table class="table table-bordered rounded rounded-3">
        <thead class="bg-muted">
          <tr>
            <th class="text-black fs-5 text-center">Student Name</th>
            <th class="text-black fs-5 text-center">Student Class</th>
            <th class="text-black fs-5 text-center">DOB</th>
            <th class="text-black fs-5 text-center">Gender</th>
            <th class="text-black fs-5 text-center">Father Name</th>
            <th class="text-black fs-5 text-center">Mother Name</th>
            <th class="text-black fs-5 text-center">Contact No.</th>
            <th class="text-black fs-5 text-center">Address</th>
            <th class="text-black fs-5 text-center">Maths</th>
            <th class="text-black fs-5 text-center">Scince</th>
            <th class="text-black fs-5 text-center">English</th>
            <th class="text-black fs-5 text-center">Computer</th>
            <th class="text-black fs-5 text-center">Email id</th>
            <th class="text-black fs-5 text-center">Action</th>
          </tr>
        </thead>

        <tbody id="user-data-list">
          {student && student.length > 0 ?
            student.map((st, key) => (
              <tr key={key}>

                <td class="fs-5 text-center">{st.stname}</td>
                <td class="fs-5 text-center">{st.stclass}</td>
                <td class="fs-5 text-center">{st.stdob}</td>
                <td class="fs-5 text-center">{st.gender}</td>
                <td class="fs-5 text-center">{st.fname}</td>
                <td class="fs-5 text-center">{st.mname}</td>
                <td class="fs-5 text-center">{st.cnumber}</td>
                <td class="fs-5 text-center">{st.address}</td>
                <td class="fs-5 text-center">{st.maths}</td>
                <td class="fs-5 text-center">{st.computer}</td>
                <td class="fs-5 text-center">{st.scince}</td>
                <td class="fs-5 text-center">{st.english}</td>
                <td class="fs-5 text-center">{st.uEmail}</td>
                <td class="fs-5 text-center">
                  <Link className='btn btn-success me-2 text-white fw-bold' to={`/student/view/${key}`}>View</Link>
                  <Link className='btn btn-warning me-2 text-white fw-bold' to={`/student/edit/${key}`}>Edit</Link>
                  <a href="" className='btn btn-danger text-white fw-bold' onClick={(e) => handleDelete(e, key)}
                  >Delete</a>
                </td>
              </tr>
            )) : <tr><td colspan="14"><h3 className='mt-2 text-muted text-center'>Student Not Found</h3></td></tr>
          }

        </tbody>
      </table>
    </div>
  )
}
