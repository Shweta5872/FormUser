

const Validation = (values) => {
    let errors = {}
 
    if(!values.name) {
        errors.name = "Name Required"
    }

    else if (values.name.length < 5) {
        errors.name = "Name must be more than 5 char"
    }

    if(!values.email) {
        errors.name = "Please Enter Email"
    }

    

    if(!values.dateofbirth) {
        errors.name = "Please Select DOB"
    }

    return errors;
}

export default  Validation;