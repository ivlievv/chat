import React from "react";


function Input (props) {
    const {field, form, ...rest} = props;

    return (
        <label>
            <div>Email:</div>
            <input {...field} {...rest}/>

        </label>
    )


}
export default Input