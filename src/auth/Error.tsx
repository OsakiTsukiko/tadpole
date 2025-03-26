import '../scss/styles.css'

function ErrorPopup(args: {
    error: string,
}) {
    return (
        <div className='error-popup roboto'>
            {args.error}
        </div>
    )
}

export default ErrorPopup