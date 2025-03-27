import { useState } from 'react';
import { ButtonInput } from '../auth/Input';
import '../scss/styles.css'
import { useTadpoles } from '../TadpoleProvider';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function Stats() {
    const { currentTP, tadpoles, addRandomTadpole, isDev } = useTadpoles();

    const filteredTadpoles = tadpoles.sort((a, b) => 
        b.seedlings.length - a.seedlings.length
    );

    const chartData = filteredTadpoles.map(tp => ({
        name: tp.username,
        seedlings: tp.seedlings.length,
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
            {isDev && <div className='controlls'>
                <ButtonInput text='Add Random Tadpole' onclick={() => { addRandomTadpole(); }} disabled={false} />
            </div>}
            <div className='chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="seedlings" fill="#A4D48C" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Stats
