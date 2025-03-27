import '../scss/styles.css'
import { useTadpoles } from '../TadpoleProvider';

function Stats() {
    const { currentTP, tadpoles } = useTadpoles();
    
    const filteredTadpoles = tadpoles.sort((a, b) => 
        b.seedlings.length - a.seedlings.length
    );

    return (
        <div className='stats'>
            <div className='list'>
                {filteredTadpoles.map(tp =>
                    <div className='element'>
                        <span className='username roboto'>{tp.username}</span>
                        <span className='value roboto'>{tp.seedlings.length}</span>
                    </div>
                )}
            </div>
            <div className='chart'>

            </div>
        </div>
    )
}

export default Stats
