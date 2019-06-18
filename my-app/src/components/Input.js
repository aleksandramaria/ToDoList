import React from 'react';

const Input = ({ inputValue, handleInputChange }) => {
    return (
        <input value={inputValue} onChange={handleInputChange}/>
    )
};

export default Input;