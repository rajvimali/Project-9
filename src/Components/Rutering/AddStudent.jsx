import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
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
        if (!input.maths || input.maths >= 101 || input.maths < 0) {
            isValid = false;
            errors.maths = 'Please Enter Valid Mark';
        }
        if (!input.computer || input.computer >= 101 || input.computer < 0) {
            isValid = false;
            errors.computer = 'Please Enter Valid Mark';
        }
        if (!input.english || input.english >= 101 || input.english < 0) {
            isValid = false;
            errors.english = 'Please Enter Valid Mark';
        }
        if (!input.scince || input.scince >= 101 || input.scince < 0) {
            isValid = false;
            errors.scince = 'Please Enter Valid Mark';
        }
        if (!input.cnumber || input.cnumber.length != 10) {
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
                <h3 class="text-center fw-bolder mt-3 mb-3">Add Students</h3>
                <div className="mb-2">
                    <label className="text-muted fs-5">Student name</label><br />
                    <input className="form-control  fs-5" name="stname" type="text" onChange={handleChange} />
                    {errors.stname && <div className="text-danger">{errors.stname}</div>}
                </div>
                <div className="mb-2">
                    <label className="text-muted fs-5">Student Class</label>
                    <select className="form-select fs-5 mb-2 text-muted" onChange={handleChange} name="stclass">
                        <option defaultValue>Select class</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        {errors.stclass && <div className="text-danger">{errors.stclass}</div>}
                    </select>
                    <label htmlFor="" className="text-muted fs-5">Gender</label><br />
                    <input type="radio" name='gender' value="Male" onChange={handleChange} />
                    <label htmlFor="" className='p-2'> Male</label>
                    <input type="radio" name='gender' value="Female" onChange={handleChange} />
                    <label htmlFor="" className='p-2'> Female</label>
                    {errors.gender && <div className="text-danger">{errors.gender}</div>}

                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-5">Date of Birth : </label>
                    <input type="date" class="fs-4 text-muted p-2 border-0" id="dob" onChange={handleChange} name="stdob" />

                </div><br />
                <h4 class="fw-bolder mb-2">Parents/Guardian's details</h4>
                <div class="mb-2">
                    <label for="" class="text-muted fs-5">Father's Name</label>
                    <input class="form-control fs-5" id="Father-Name" type="text" onChange={handleChange} name="fname" />
                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-5">Mother's Name</label>
                    <input class="form-control fs-5" id="Mother-name" type="text" onChange={handleChange} name="mname" />
                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-5" maxlength="10" minlength="2">Contect Number</label>
                    <input class="form-control fs-5" id="contect-number" type="number" onChange={handleChange} name="cnumber" />
                    {errors.cnumber && <div className="text-danger">{errors.cnumber}</div>}
                </div>
                <div class="mb-2">
                    <label for="" class="text-muted fs-5">Address</label>
                    <input class="form-control  fs-5" id="address" type="text" onChange={handleChange} name="address" />
                </div><br />
                <div class="col-4">
                    <h4 class="fw-bolder">Student Marks</h4>
                    <label for="" class="text-muted fs-5">Maths</label>
                    <input type="number" class="form-control fs-5" id="maths" onChange={handleChange} name="maths" />
                    {errors.maths && <div className="text-danger">{errors.maths}</div>}
                    <label for="" class="text-muted fs-5">Computer</label>
                    <input type="number" class="form-control fs-5" id="computer" onChange={handleChange} name="computer" />
                    {errors.computer && <div className="text-danger">{errors.computer}</div>}
                    <label for="" class="text-muted fs-5">English</label>
                    <input type="number" class="form-control fs-5" id="english" onChange={handleChange} name="english" />
                    {errors.english && <div className="text-danger">{errors.english}</div>}
                    <label for="" class="text-muted fs-5">Scince</label>
                    <input type="number" class="form-control fs-5" id="scince" onChange={handleChange} name="scince" />
                    {errors.scince && <div className="text-danger">{errors.scince}</div>}

                    <h4 id="mark-error" class="text-danger pt-2"></h4>
                </div>

                <div>

                    <label for="uEmail" class="form-label text-muted fs-5">Email</label> <br />
                    <input type="email " class="form-control p-2 fs-5" name="uEmail" id="uEmail"
                        onChange={handleChange} required /><br />

                </div>
                <button className="btn btn-primary fs-5 text-white form-control" id="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddStudent;



