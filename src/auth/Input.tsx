import '../scss/styles.css'

function TextInput(args: {
    id: string,
    span: string,
    placeholder: string,
    name: string,
    autocomplete: string,
    type: string,
    input_ref: React.RefObject<HTMLInputElement | null>,
}) {
    return (
        <label className='text-input' htmlFor={args.id}>
            <input type={args.type} id={args.id} placeholder={args.placeholder} className='roboto' name={args.name} autoComplete={args.autocomplete} ref={args.input_ref} />
            <span className='roboto unselectable'>{args.span}</span>
        </label>
    )
}

function PasswordInput(args: {
    id: string,
    span: string,
    placeholder: string,
    name: string,
    autocomplete: string,
    input_ref: React.RefObject<HTMLInputElement | null>,
}) {
    return (
        <label className='text-input' htmlFor={args.id}>
            <input type='password' id={args.id} placeholder={args.placeholder} className='roboto' name={args.name} autoComplete={args.autocomplete} ref={args.input_ref} />
            <span className='roboto unselectable'>{args.span}</span>
        </label>
    )
}

function ButtonInput(args: {
    text: string,
    onclick: () => void,
    disabled: boolean,
}) {
    return (
        <button disabled={args.disabled} className='button-input roboto unselectable' onClick={args.onclick}>{args.text}</button>
    )
}

function TextButton(args: {
    prefix: string,
    text: string,
    suffix: string,
    onclick: () => void,
}) {
    return (
        <span className='text-button roboto'>{args.prefix} <span className='button roboto' onClick={args.onclick}>{args.text}</span> {args.suffix}</span>
    )
}

export { TextInput, PasswordInput, ButtonInput, TextButton }