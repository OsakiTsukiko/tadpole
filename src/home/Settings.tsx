import React, { useState } from 'react';
import { ButtonInput, ImportantButtonInput, TextInput } from '../auth/Input'
import '../scss/styles.css'
import { getTr } from '../utils/translation'
import { useTadpoles } from '../TadpoleProvider';
import ErrorPopup from '../auth/Error';
import { isPasswordValid } from '../utils/user_details';

function Settings() {
    const { currentTP, updateTadpole, setTP } = useTadpoles();

    const [error, setError] = useState<string | null>(null);

    let update_description_input: React.RefObject<HTMLInputElement | null> = React.createRef();

    let old_password_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let new_password_input: React.RefObject<HTMLInputElement | null> = React.createRef();
    let confirm_new_password_input: React.RefObject<HTMLInputElement | null> = React.createRef();

    const updateDescription = () => {
        const new_description = update_description_input.current?.value;

        const new_tp = Object.assign({}, currentTP);
        new_tp.description = new_description ? new_description : "";

        updateTadpole(new_tp);
        setTP(new_tp);

        if (update_description_input.current?.value) update_description_input.current.value = "";
    }

    const updatePassword = () => {
        setError(null);

        const old_password = old_password_input.current?.value ? old_password_input.current?.value : "";
        const new_password = new_password_input.current?.value ? new_password_input.current?.value : "";
        const confirm_new_password = confirm_new_password_input.current?.value ? confirm_new_password_input.current?.value : "";

        if (currentTP?.password != old_password) {
            setError(getTr('en').home.settings.error.incorrect_password);
            return;
        }

        if (!isPasswordValid(new_password)) {
            setError(getTr('en').home.settings.error.invalid_password);
            return;
        }

        if (new_password != confirm_new_password) {
            setError(getTr('en').home.settings.error.missmatched_passwords);
            return;
        }

        const new_tp = Object.assign({}, currentTP);
        new_tp.password = new_password;

        updateTadpole(new_tp);
        setTP(new_tp);

        if (old_password_input.current?.value) old_password_input.current.value = "";
        if (new_password_input.current?.value) new_password_input.current.value = "";
        if (confirm_new_password_input.current?.value) confirm_new_password_input.current.value = "";
    }

    return (
        <div className='settings'>
            <div className='content'>
                <TextInput id='description' span={getTr('en').home.settings.description.label} placeholder={getTr('en').home.settings.description.placeholder} name='update_description' autocomplete='update_description' type='update_description' input_ref={update_description_input} />
                <ButtonInput text={getTr('en').home.settings.update_description} onclick={() => { updateDescription(); }} disabled={false} />

                <TextInput id='old_password' span={getTr('en').home.settings.old_password_input.label} placeholder={getTr('en').home.settings.old_password_input.placeholder} name='old_password' autocomplete='old_password' type='password' input_ref={old_password_input} />
                <TextInput id='new_password' span={getTr('en').home.settings.new_password_input.label} placeholder={getTr('en').home.settings.new_password_input.placeholder} name='new_password' autocomplete='new_password' type='password' input_ref={new_password_input} />
                <TextInput id='confirm_new_password' span={getTr('en').home.settings.confirm_new_password_input.label} placeholder={getTr('en').home.settings.confirm_new_password_input.placeholder} name='confirm_new_password' autocomplete='confirm_new_password' type='password' input_ref={confirm_new_password_input} />
                <ButtonInput text={getTr('en').home.settings.update_password} onclick={() => { updatePassword(); }} disabled={false} />
                
                <ImportantButtonInput text={getTr('en').home.settings.delete} onclick={() => { }} disabled={false} />
                {error && <ErrorPopup error={error} />}
            </div>
        </div>
    )
}

export default Settings
