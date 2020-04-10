import React from "react";
import { Form, Field, withFormik} from "formik";
import Input from "../Input";

const handleSubmit = (values) => {
    console.log(values)
}

const SignInForm  = (props) =>{
    console.log(props)
    const emailValidate = (value) => {}
    return (
        <Form>
            <Field type="email" validate={emailValidate} name="email" onChange={(e) => console.log(e.target.value)} component={Input}/>
            <Field type="password" name="password"/>
            <div onClick={props.submitForm}>login</div>
        </Form>
    )
}


export default withFormik ({
    mapPropsToValues: () => ({email: '', password: ''}),
    initialValues: {
        email: '',
        password: ''
    },
                            handleSubmit
                                })
(SignInForm)
