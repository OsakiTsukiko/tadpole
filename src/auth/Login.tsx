import '../scss/styles.css'
import { TextInput, ButtonInput, TextButton, PasswordInput } from './Input'
import Title from './Title'
import TitleIcon from '../assets/frog.png';

function Login() {
    return (
        <div className='login'>
            <div className='content'>
                <Title title='Return to the Pond!' subtitle='Your lily pad is just a hop away! Login to continue your pond journey.' icon={TitleIcon} />
                <div className='input-cont'>
                    <TextInput id={'username'} span={'Your Lily Pad Name'} placeholder={'Username'} />
                    <PasswordInput id={'password'} span={'Secret Ribbit'} placeholder={'Password'} />
                    <ButtonInput text='Take a Leap In!' />
                </div>
                <TextButton prefix='New to the pond?' text='Hop over to register!' suffix='🌿' />
            </div>
        </div>
    )
}

export default Login
