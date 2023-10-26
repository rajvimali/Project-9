import React from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditStudent() {
  const [errors, setErrors] = useState({});
  const [StudentList, setStudentList] = useState(JSON.parse(localStorage.getItem("studentlist")))
  const id = useParams();
  const [student, setStudent] = useState(StudentList[id.id]);
  const [input, setInput] = useState(student);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

  };
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    let errorMessages = {};

    if (!input.stname || input.stname.trim() === '') {
      errorMessages.stname = 'Student name is required';
      isValid = false;
    }

    if (!input.stclass || input.stclass === 'Select class') {
      errorMessages.stclass = 'Please select a class';
      isValid = false;
    }
    if (!input.gender || input.gender === 'Select Your Gender') {
      isValid = false;
      errorMessages.stclass = 'Please select Your Gender';
    }
    if (!input.maths || input.maths >= 101 || input.maths < 0) {
      isValid = false;
      errorMessages.maths = 'Please Enter Valid Mark';
    }
    if (!input.computer || input.computer >= 101 || input.computer < 0) {
      isValid = false;
      errorMessages.computer = 'Please Enter Valid Mark';
    }
    if (!input.english || input.english >= 101 || input.english < 0) {
      isValid = false;
      errorMessages.english = 'Please Enter Valid Mark';
    }
    if (!input.scince || input.scince >= 101 || input.scince < 0) {
      isValid = false;
      errorMessages.scince = 'Please Enter Valid Mark';
    }
    if (input.cnumber.length != 10) {
      isValid = false;
      errorMessages.cnumber = 'Please Enter Valid Number';
    }


    setErrors(errorMessages);
    return isValid;
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      StudentList[id.id] = input;
      localStorage.setItem("studentlist", JSON.stringify(StudentList));
      navigate("/student");
    }
  };
  return (
    <div class="ubdate" id="edit">
      <form action="" onSubmit={handleUpdate}>
        <h1 class="text-center fw-bolder mt-3">Edit Students</h1>
        <div class="mx-auto my-3 col-6 border p-3 rounded">
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Student name</label><br />
            <input class="form-control p-2 fs-4" id="Student-name" name="stname" value={input ? input.stname : ""} type="text" onChange={handleChange} />
            {errors.stname && <div className="text-danger">{errors.stname}</div>}
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Student Class</label>
            <select class="form-select fs-4 p-2 text-muted" aria-label="Default select example"
              id="Student-class" onChange={handleChange} name="stclass" value={input ? input.stclass : ""}>
              <option selected>Select class</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
            </select>
          </div><br />
          <label htmlFor="" className="text-muted fs-4">Gender</label><br />
          <input type="radio" name='gender' value="Male" onChange={handleChange} />
          <label htmlFor="" className='p-2'> Male</label>
          <input type="radio" name='gender' value="Female" onChange={handleChange} />
          <label htmlFor="" className='p-2'> Female</label>
          {errors.gender && <div className="text-danger">{errors.gender}</div>}
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Date of Birth : </label>
            <input type="date" class="fs-4 text-muted p-2 border-0" id="dob" onChange={handleChange} name="stdob" value={input ? input.stdob : ""} required />
          </div><br />

          <h2 class="fw-bolder">Parents/Guardian's details</h2>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Father's Name</label>
            <input class="form-control p-2 fs-4" id="Father-Name" type="text" onChange={handleChange} name="fname" value={input ? input.fname : ""} required />
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Mother's Name</label>
            <input class="form-control p-2 fs-4" id="Mother-name" type="text" onChange={handleChange} name="mname" value={input ? input.mname : ""} required />
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Contect Number</label>
            <input class="form-control p-2 fs-4" id="contect-number" type="number" onChange={handleChange} name="cnumber" value={input ? input.cnumber : ""} />
            {errors.cnumber && <div className="text-danger">{errors.cnumber}</div>}
          </div>
          <div class="mb-2">
            <label for="" class="text-muted fs-4">Address</label>
            <input class="form-control p-2 fs-4" id="address" type="text" onChange={handleChange} name="address" value={input ? input.address : ""} required />
          </div><br />
          <div class="col-4">
            <h2 class="fw-bolder">Student Mark</h2>
            <label for="" class="text-muted fs-4">Maths</label>
            <input type="number" class="form-control p-2 fs-4" id="maths" onChange={handleChange} name="maths" value={input ? input.maths : ""} />
            {errors.maths && <div className="text-danger">{errors.maths}</div>}
            <label for="" class="text-muted fs-4">Computer</label>
            <input type="number" class="form-control p-2 fs-4" id="computer" onChange={handleChange} name="computer" value={input ? input.computer : ""} />
            {errors.computer && <div className="text-danger">{errors.computer}</div>}
            <label for="" class="text-muted fs-4">English</label>
            <input type="number" class="form-control p-2 fs-4" id="english" onChange={handleChange} name="english" value={input ? input.english : ""} />
            {errors.english && <div className="text-danger">{errors.english}</div>}
            <label for="" class="text-muted fs-4">Scince</label>
            <input type="number" class="form-control p-2 fs-4" id="scince" onChange={handleChange} name="scince" value={input ? input.scince : ""} />
            {errors.scince && <div className="text-danger">{errors.scince}</div>}
            <label for="" class=" text-muted fs-4">Email</label> <br />
            <input type="email " class="form-control p-2 fs-4" name="uEmail" id="uEmail"
              onChange={handleChange} value={input ? input.uEmail : ""} required /><br />
          </div>
          <div class="text-center mt-3">
            <button class="btn btn-success fs-4 fw-bolder px-5 py-2 " id="add-btn"
            >Update</button>
          </div>
        </div>
      </form>
    </div>


  )
}
