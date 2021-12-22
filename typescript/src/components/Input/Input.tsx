import React from "react";

declare interface PropsDeInput {
    title: String,
    subtitle: String
}

const Input = ({ title }: PropsDeInput) => {

    const handleChange = (e: any) => {
        alert(e.target.value)
    }

    const suma = (num1: any, num2: any) => {
        alert(num1 + num2);
    }

    return (
        <div>
            <h2>{title}</h2>
            <input onChange={handleChange} />
        </div>
    )
}

export default Input;
