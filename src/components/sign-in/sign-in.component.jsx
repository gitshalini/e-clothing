import React from 'react';
import { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

const initialState = {
    email: '',
    password: ''
}

const SignIn = () =>{
    const [{email, password}, setState] = useState(initialState);
    const resetState = () =>{
        setState(initialState);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        resetState();
    }
    const handleChange = (e) => {
        const {value, name} = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
    }
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange} 
                    label="email" required/>
                <FormInput type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange} 
                    label="password" required/>
                <CustomButton type="submit">Sign In</CustomButton>
            </form>
        </div>
    );
}
export default SignIn;