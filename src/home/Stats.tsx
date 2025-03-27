import '../scss/styles.css'
import { useTadpoles } from '../TadpoleProvider';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function Stats() {
    const { currentTP, tadpoles } = useTadpoles();
    
    const filteredTadpoles = tadpoles.sort((a, b) => 
        b.seedlings.length - a.seedlings.length
    );

    const chartData = filteredTadpoles.map(tp => ({
        name: tp.username,
        value: tp.seedlings.length,
    }));


    return (
        <div className='stats'>
            <div className='list'>
                {filteredTadpoles.map(tp =>
                    <div className='element'>
                        <span className='username roboto'>{tp.username}</span>
                        <span className='value roboto'>{tp.seedlings.length} Seedlings</span>
                    </div>
                )}
            </div>
            <div className='chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#A4D48C" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Stats
