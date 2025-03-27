import { ButtonInput } from '../auth/Input'
import '../scss/styles.css'

function Seedling(args: {
    name: string,
    description: string,
    sprinkles: number
}) {
    return (
        <div className='seedling'>
            <div className='left'>
                <span className='name'>{args.name}</span>
                <span className='description'>{args.description}</span>
            </div>
            <div className='right'>
                <div className='sprinkles'>
                    <span className='icon'>
                        <i className="fa-solid fa-droplet"></i>
                    </span>
                    <span className='number'>
                        {args.sprinkles}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Seedling;