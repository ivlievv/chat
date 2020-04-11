import React, {Component} from "react";
import {Formik, Form, Field} from "formik";
import Input from "../Input";



class SignUpForm extends Component{
    handleSubmit = (values) => {
        console.log(values)
    }
    render() {
        return (
            <Formik initialValues={{email: '', password: ''}}
                    onSubmit={this.handleSubmit}>
                {
                    (formikProps) =>(
                        <Form>
                            <Field
                                   type="email"
                                   name="email"

                                   onChange={(e) => {console.log(e.target.value)}}
                                   children={Input}/>
                            <Field type="password"
                                   name="password"
                            />
                            <div onClick={formikProps.submitForm}>login</div>
                        </Form>
                    )
                }
            </Formik>
        )
    }

}

export default SignUpForm