import React from "react";
import {withRouter} from "react-router"
import SignInForm from "../components/SignInPage";

function SignInPage(props) {
    return (
        <>
        <h1>Sign In Page</h1>
            <SignInForm/>
        </>
    );

}

export default withRouter(SignInPage) ;