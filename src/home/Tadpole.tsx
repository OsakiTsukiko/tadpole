import { ButtonInput } from '../auth/Input'
import '../scss/styles.css'

function Tadpole(args: {
    name: string,
    description: string,
    seedlings: number
}) {
    return (
        <div className='tadpole'>
            <div className='left'>
                <span className='name'>{args.name}</span>
                <span className='description'>{args.description}</span>
            </div>
            <div className='right'>
                <div className='seedlings-2'>
                    <span className='icon'>
                        <i className="fa-solid fa-seedling"></i>
                    </span>
                    <span className='number'>
                        {args.seedlings}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Tadpole;