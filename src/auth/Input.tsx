import '../scss/styles.css'

function TextInput(args: {
    id: string,
    span: string,
    placeholder: string,
}) {
    return (
        <label className='text-input' htmlFor={args.id}>
            <input type='text' id={args.id} placeholder={args.placeholder} className='roboto' />
            <span className='roboto unselectable'>{args.span}</span>
        </label>
    )
}

function PasswordInput(args: {
    id: string,
    span: string,
    placeholder: string,
}) {
    return (
        <label className='text-input' htmlFor={args.id}>
            <input type='password' id={args.id} placeholder={args.placeholder} className='roboto' />
            <span className='roboto unselectable'>{args.span}</span>
        </label>
    )
}

function ButtonInput(args: {
    text: string,
}) {
    return (
        <button className='button-input roboto unselectable'>{args.text}</button>
    )
}

function TextButton(args: {
    prefix: string,
    text: string,
    suffix: string,
}) {
    return (
        <span className='text-button roboto'>{args.prefix} <span className='button roboto'>{args.text}</span> {args.suffix}</span>
    )
}

export { TextInput, PasswordInput, ButtonInput, TextButton }