import '../scss/styles.css'
import { TextInput, ButtonInput, TextButton, PasswordInput } from './Input'
import Title from './Title'
import TitleIcon from '../assets/frog.png';
import { useNavigate } from "react-router";

function Register() {
    let navigate = useNavigate();

    return (
        <div className='register'>
            <div className='content'>
                <Title title='Join the Pond!' subtitle=' Every tadpole needs a lily pad. Create yours today! ' icon={TitleIcon} />
                <div className='input-cont'>
                    <TextInput id={'username'} span={'Your Lily Pad Name'} placeholder={'Username'} name='username' autocomplete='username' type='text' />
                    <TextInput id={'email'} span={'Pond Mail'} placeholder={'Email'} name='email' autocomplete='email' type='email' />
                    <PasswordInput id={'password'} span={'Secret Ribbit'} placeholder={'Password'} name='password' autocomplete='password' />
                    <PasswordInput id={'confirm-password'} span={'Confirm Secret Ribbit'} placeholder={'Confirm Password'} name='' autocomplete='' />
                    <ButtonInput text='Take a Leap In!' />
                </div>
                <TextButton prefix='Already have a pad?' text='Leap back in!' suffix='🌿' onclick={() => {
                    navigate("/login");
                }} />
            </div>
        </div>
    )
}

export default Register
