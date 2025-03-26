import '../scss/styles.css'
import { TextInput, ButtonInput, TextButton, PasswordInput } from './Input'
import Title from './Title'
import TitleIcon from '/frog.png';
import { useNavigate } from "react-router";
import React, { useState } from 'react';
import { isPasswordValid, isUsernameValid } from '../utils/user_details';
import ErrorPopup from './Error';
import { getTr } from '../utils/translation';
import { useTadpoles } from '../TadpoleProvider';

function Login() {
    let navigate = useNavigate();

    let username_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let password_input: React.RefObject<HTMLInputElement | null> = React.createRef();

    const [error, setError] = useState<string | null>(null);

    const { handleLogin } = useTadpoles();

    return (
        <div className='login'>
            <div className='content'>
                <Title title={getTr('en').login.title} subtitle={getTr('en').login.subtitle} icon={TitleIcon} />
                <div className='input-cont'>
                    <TextInput id={'username'} span={getTr('en').login.username_input.label} placeholder={getTr('en').login.username_input.placeholder} name='username' autocomplete='username' type='text' input_ref={username_input} />
                    <PasswordInput id={'password'} span={getTr('en').login.password_input.label} placeholder={getTr('en').login.password_input.placeholder} name='password' autocomplete='password' input_ref={password_input} />
                    <ButtonInput text={getTr('en').login.submit_button} onclick={() => {
                        setError(null)
                        let username, password;
                        if (username_input.current != null) {
                            username = username_input.current.value;
                        } else return; // internal error?

                        if (password_input.current != null) {
                            password = password_input.current.value;
                        } else return; // internal error?

                        if (!isUsernameValid(username)) {
                            setError(getTr('en').log_reg.error.username);
                            return;
                        }

                        if (!isPasswordValid(password)) {
                            setError(getTr('en').log_reg.error.password);
                            return;
                        }

                        const success = handleLogin(username, password);
                        if (!success) {
                            setError(getTr('en').log_reg.error.unable_to_login);
                            return;
                        }

                        // TODO: auth
                    }} />
                </div>
                <TextButton prefix='New to the pond?' text='Hop over to register!' suffix='🌿' onclick={() => {
                    navigate("/register");
                }} />
                {error && <ErrorPopup error={error} />}
            </div>
        </div>
    )
}

export default Login
