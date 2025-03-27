import React from 'react';
import { ButtonInput, ImportantButtonInput, TextInput } from '../auth/Input'
import '../scss/styles.css'
import { getTr } from '../utils/translation'

function Settings() {
    let old_password_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let new_password_input: React.RefObject<HTMLInputElement | null> = React.createRef();

    return (
        <div className='settings'>
            <div className='content'>
                <TextInput id='description' span={getTr('en').home.settings.description.label} placeholder={getTr('en').home.settings.description.placeholder} name='update_description' autocomplete='update_description' type='update_description' input_ref={old_password_input} />
                <ButtonInput text='Update Description!' onclick={() => { }} disabled={false} />

                <TextInput id='old_password' span={getTr('en').home.settings.old_password_input.label} placeholder={getTr('en').home.settings.old_password_input.placeholder} name='old_password' autocomplete='old_password' type='password' input_ref={old_password_input} />
                <TextInput id='new_password' span={getTr('en').home.settings.new_password_input.label} placeholder={getTr('en').home.settings.new_password_input.placeholder} name='new_password' autocomplete='new_password' type='password' input_ref={new_password_input} />
                <TextInput id='confirm_new_password' span={getTr('en').home.settings.confirm_new_password_input.label} placeholder={getTr('en').home.settings.confirm_new_password_input.placeholder} name='confirm_new_password' autocomplete='confirm_new_password' type='password' input_ref={new_password_input} />
                <ButtonInput text='Change Password!' onclick={() => { }} disabled={false} />
                
                <ImportantButtonInput text='Delete' onclick={() => { }} disabled={false} />
            </div>
        </div>
    )
}

export default Settings
