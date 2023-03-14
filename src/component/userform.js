import React, {useEffect, useState} from "react";
import "./userform.css"
import validation from './Validation'

const UserForm = () =>   {
    const [values, setValues] = useState({
      name: '',
      email: '',
      dateofbirth: ''

    })
    const [errors, setError] = useState({})
    
    function handleChange(e) {
        setValues({...values, [e.target.name]: e.target.value})
    }

       function hanldeSubmit(e) {
        e.preventDefault();
        setError(validation(values));
       }
       
       

    return (
        <form onSubmit={hanldeSubmit}>
        <div className="cover">

            <h1>User Form</h1>

            <input type="text" placeholder="Username" value={values.name} name="name" onChange={handleChange}/>

            {errors.name && <p style={{color: "red", fontsize: "13px"}}>{errors.name}</p>}

            <input type="email" placeholder="Email" value={values.email} name="email" onChange={handleChange}/>

            {errors.email && <p style={{color: "red", fontsize: "13px"}}>{errors.email}</p>}

            <input type="date" placeholder="DOB" value={values.dateofbirth} name="dateofbirth" onChange={handleChange}/>

            {errors.dateofbirth && <p style={{color: "red", fontsize: "13px"}}>{errors.dateofbirth}</p>}

            <input type="tel" placeholder="Phone no." name="phone"/>

           {/*<div className="submit-btn" onClick> Submit</div> */}

            <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default UserForm;