import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pr8.css'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [input, setInput] = useState({});
    const [errors, setErrors] = useState({});
    const [data, setData] = useState(() => {
        return JSON.parse(localStorage.getItem("studentlist")) || [];
    });
    useEffect(() => {
        localStorage.setItem("studentlist", JSON.stringify(data));

    }, [data]);

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const navigate = useNavigate();

    const validateForm = () => {
        let isValid = true;
        let errors = {};

        if (!input.stname) {
            isValid = false;
            errors.stname = 'Student name is required';
        }

        if (!input.stclass || input.stclass === 'Select class') {
            isValid = false;
            errors.stclass = 'Please select a class';
        }
        if (!input.gender || input.gender === 'Select Your Gender') {
            isValid = false;
            errors.gender = 'Please select Your Gender';
        }
        if (!input.maths ||input.maths >= 101 || input.maths<0){
            isValid = false;
            errors.maths = 'Please Enter Valid Mark';
        }
        if (!input.computer ||input.computer >= 101 || input.computer<0){
            isValid = false;
            errors.computer = 'Please Enter Valid Mark';
        }
        if (!input.english ||input.english >= 101 || input.english<0){
            isValid = false;
            errors.english = 'Please Enter Valid Mark';
        }
        if (!input.scince ||input.scince >= 101 || input.scince<0){
            isValid = false;
            errors.scince = 'Please Enter Valid Mark';
        }
        if(!input.cnumber ||input.cnumber.length != 10){
            isValid = false;
            errors.cnumber = 'Please Enter Valid Number';
        }

        // Add more validation rules for other fields as needed

        setErrors(errors);
        return isValid;
    };
const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        // Update local storage
        const updatedData = [...data, input];
        localStorage.setItem("studentlist", JSON.stringify(updatedData));
        // Navigate to "/student" page
        navigate("/student");
    }
};

    return (
        <div className="main">       
            <form id="registerForm" onSubmit={handleSubmit}>
            <h1 class="text-center fw-bolder mt-3">Add Students</h1>
                <div className="mb-2">
                    <label className="text-muted fs-4">Student name</label><br />
                    <input className="form-control p-2 fs-4" name="stname" type="text" onChange={handleChange} />
                    {errors.stname && <div className="text-danger">{errors.stname}</div>}
                </div>
                <div className="mb-2">
                    <label className="text-muted fs-4">Student Class</label>
                    <select className="form-select fs-4 p-2 text-muted" onChange={handleChange} name="stclass">
                        <option defaultValue>Select class</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        {errors.stclass && <div className="text-danger">{errors.stclass}</div>}
                    </select>
                    <label htmlFor="" className="text-muted fs-4">Gender</label><br />
                    <input type="radio" name='gender' value="Male" onChange={handleChange}/>
                    <label htmlFor="" className='p-2'> Male</label>
                    <input type="radio" name='gender' value="Female" onChange={handleChange}/>
                    <label htmlFor="" className='p-2'> Female</label>
                    {errors.gender && <div className="text-danger">{errors.gender}</div>}
                    
                </div>
                <div class="mb-2">
                        <label for="" class="text-muted fs-4">Date of Birth : </label>
                        <input type="date" class="fs-4 text-muted p-2 border-0" id="dob" onChange={handleChange} name="stdob" />
                        
                    </div><br />
                    <h2 class="fw-bolder">Parents/Guardian's details</h2>
                    <div class="mb-2">
                        <label for="" class="text-muted fs-4">Father's Name</label>
                        <input class="form-control p-2 fs-4" id="Father-Name" type="text" onChange={handleChange} name="fname" />
                    </div>
                    <div class="mb-2">
                        <label for="" class="text-muted fs-4">Mother's Name</label>
                        <input class="form-control p-2 fs-4" id="Mother-name" type="text" onChange={handleChange} name="mname" />
                    </div>
                    <div class="mb-2">
                        <label for="" class="text-muted fs-4" maxlength="10" minlength="2">Contect Number</label>
                        <input class="form-control p-2 fs-4" id="contect-number" type="number" onChange={handleChange} name="cnumber"  />
                        {errors.cnumber && <div className="text-danger">{errors.cnumber}</div>}
                    </div>
                    <div class="mb-2">
                        <label for="" class="text-muted fs-4">Address</label>
                        <input class="form-control p-2 fs-4" id="address" type="text" onChange={handleChange} name="address"  />
                    </div><br />
                    <div class="col-4">
                        <h2 class="fw-bolder">Student Mark</h2>
                        <label for="" class="text-muted fs-4">Maths</label>
                        <input type="number" class="form-control p-2 fs-4" id="maths" onChange={handleChange} name="maths" />
                        {errors.maths && <div className="text-danger">{errors.maths}</div>}
                        <label for="" class="text-muted fs-4">Computer</label>
                        <input type="number" class="form-control p-2 fs-4" id="computer" onChange={handleChange} name="computer"  />
                        {errors.computer && <div className="text-danger">{errors.computer}</div>}
                        <label for="" class="text-muted fs-4">English</label>
                        <input type="number" class="form-control p-2 fs-4" id="english" onChange={handleChange} name="english"  />
                        {errors.english && <div className="text-danger">{errors.english}</div>}
                        <label for="" class="text-muted fs-4">Scince</label>
                        <input type="number" class="form-control p-2 fs-4" id="scince" onChange={handleChange} name="scince" />
                        {errors.scince && <div className="text-danger">{errors.scince}</div>}
                        
                        <h4 id="mark-error" class="text-danger pt-2"></h4>
                    </div>

                    <div>

                        <label for="uEmail" class="form-label text-muted fs-4">Email</label> <br />
                        <input type="email " class="form-control p-2 fs-4" name="uEmail" id="uEmail"
                            onChange={handleChange} required /><br />

                        {/* <label for="uPassword" class="form-label text-muted fs-4">Password</label><br />
                        <input type="password" class="form-control p-2 fs-4" name="uPassword" id="uPassword"
                            pattern=".{0}|.{6,}" onChange={handleChange} required /><br /> */}

                        {/* <label for="confirmPassword" class="form-label text-muted fs-4">Confirm Password</label><br />
                        <input type="password" name="Confirm Password" class="form-control p-2 fs-4" id="confirmPassword"
                            /><br /> */}
                            </div>
                <button className="btn btn-primary fs-4 text-white fw-bolder" id="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;



