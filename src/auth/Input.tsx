import '../scss/styles.css'

function TextInput(args:
    {
        id: string,
        span: string,
        placeholder: string,
    }
) {
    return (
        <label className='text-input' htmlFor={args.id}>
            <input type='text' id={args.id} placeholder={args.placeholder} className='roboto' />
            <span className='roboto unselectable'>{args.span}</span>
        </label>
    )
}

export default TextInput
