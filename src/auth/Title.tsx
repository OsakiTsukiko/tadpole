import '../scss/styles.css'

function Title(args:
    {
        title: string,
        subtitle: string,
        icon: string | null
    }
) {
    return (
        <div className='title-cont'>
            <span className='title roboto'>{args.title} { args.icon != null ? <img src={args.icon} /> : "" }</span>
            <span className='subtitle roboto'>{args.subtitle}</span>
        </div>
    )
}

export default Title
