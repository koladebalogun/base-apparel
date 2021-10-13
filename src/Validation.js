const Validation = (values) => {
    let errors={};

    if(!values.email){
        errors.email = "Email is required !";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is Invalid !"
    }



    return errors;
}
 
export default Validation;