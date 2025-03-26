import '../scss/styles.css'
import { TextInput, ButtonInput, TextButton, PasswordInput } from './Input'
import Title from './Title'
import TitleIcon from '/frog.png';
import { useNavigate } from "react-router";
import React, { useState } from 'react';
import { isEmailValid, isPasswordValid, isUsernameValid } from '../utils/user_details';
import { getTr } from '../utils/translation';
import ErrorPopup from './Error';

function Register() {
    let navigate = useNavigate();

    let username_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let email_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let password_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let confirm_password_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    
    const [error, setError] = useState<string | null>(null);

    return (
        <div className='register'>
            <div className='content'>
                <Title title={getTr('en').register.title} subtitle={getTr('en').register.subtitle} icon={TitleIcon} />
                <div className='input-cont'>
                    <TextInput id={'username'} span={getTr('en').register.username_input.label} placeholder={getTr('en').register.username_input.placeholder} name='username' autocomplete='username' type='text' input_ref={username_input} />
                    <TextInput id={'email'} span={getTr('en').register.email_input.label} placeholder={getTr('en').register.email_input.placeholder} name='email' autocomplete='email' type='email' input_ref={email_input} />
                    <PasswordInput id={'password'} span={getTr('en').register.password_input.label} placeholder={getTr('en').register.password_input.placeholder} name='password' autocomplete='password' input_ref={password_input} />
                    <PasswordInput id={'confirm-password'} span={getTr('en').register.confirm_password_input.label} placeholder={getTr('en').register.confirm_password_input.placeholder} name='' autocomplete='' input_ref={confirm_password_input} />
                    <ButtonInput text='Take a Leap In!' onclick={() => {
                        setError(null)
                        let username, email, password, confirm_password;
                        if (username_input.current != null) {
                            username = username_input.current.value;
                        } else return; // internal error?
                        
                        if (email_input.current != null) {
                            email = email_input.current.value;
                        } else return; // internal error?
                        
                        if (password_input.current != null) {
                            password = password_input.current.value;
                        } else return; // internal error?
                        
                        if (confirm_password_input.current != null) {
                            confirm_password = confirm_password_input.current.value;
                        } else return; // internal error?
                        
                        if (!isUsernameValid(username)) {
                            setError(getTr('en').log_reg.error.username);
                            return;
                        }

                        if (!isEmailValid(email)) {
                            setError(getTr('en').log_reg.error.email);
                            return;
                        }
                        
                        if (!isPasswordValid(password)) {
                            setError(getTr('en').log_reg.error.password);
                            return;
                        }

                        if (password != confirm_password) {
                            setError(getTr('en').log_reg.error.confirm_password);
                            return;
                        }
                        
                        // TODO: register
                    }} />
                </div>
                <TextButton prefix='Already have a pad?' text='Leap back in!' suffix='🌿' onclick={() => {
                    navigate("/login");
                }} />
                {error && <ErrorPopup error={error} />}
            </div>
        </div>
    )
}

export default Register
