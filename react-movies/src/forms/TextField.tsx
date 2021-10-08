import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";

function Password() {
    // Initialize a boolean state
    const [passwordShown, setPasswordShown] = useState(false);

    // Password toggle handler
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPasswordShown(!passwordShown);
    };
};

export default function TextField(props: textFieldProps) {
    return (
        <div className="mb-3">
            <label htmlFor={props.field}>{props.displayName}</label>
            <Field type={props.type} name={props.field} id={props.field} className="form-control" />
            <ErrorMessage name={props.field}>{msg =>
                <div className="text-danger">{msg}</div>}</ErrorMessage>
        </div>
    )
}

interface textFieldProps {
    field: string;
    displayName: string;
    type: 'text' | 'password';
}

TextField.defaultProps = {
    type: 'text'
}