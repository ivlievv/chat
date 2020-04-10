import React from "react";
import {withRouter} from 'react-router'


function HomePage(props) {

    return (
        <>

        <h1>Home Page</h1>
        <button onClick={() => {
            props.history.push("/sign_up")
        }}>SignUp</button>
        </>
    );

}

export default withRouter(HomePage) ;