import '../scss/styles.css'
import TextInput from './Input'

function Login() {
    return (
        <div className='login'>
            <div className='content'>
                <TextInput id={'username'} span={'Your Lily Pad Name'} placeholder={'Username'} />
                <TextInput id={'password'} span={'Secret Ribbit'} placeholder={'Password'} />
            </div>
        </div>
    )
}

export default Login
