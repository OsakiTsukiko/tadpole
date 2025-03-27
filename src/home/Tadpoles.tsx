import '../scss/styles.css'
import { ButtonInput, TextInput } from '../auth/Input';
import React, { useState } from 'react';
import { getTr } from '../utils/translation';
import { useTadpoles } from '../TadpoleProvider';
import Tadpole from './Tadpole';

function Tadpoles() {
    const { currentTP, tadpoles } = useTadpoles();
    
    let search_input: React.RefObject<HTMLInputElement | null> = React.createRef();

    const [searchQuery, setSearchQuery] = useState('');
    const [sortAsc, setSortAsc] = useState(true);

    const filteredTadpoles = tadpoles.filter(tp =>
        tp.username.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => 
        sortAsc 
            ? a.username.localeCompare(b.username) 
            : b.username.localeCompare(a.username)
    );
    return (
        <div className='tadpoles'>
            <div className='top-bar'>
                <TextInput id='search' span={getTr('en').home.tadpoles.search_input.label} placeholder={getTr('en').home.tadpoles.search_input.placeholder} name='search' autocomplete='search' type='text' input_ref={search_input} />
                <ButtonInput text={getTr('en').home.tadpoles.search_button.label} onclick={() => setSearchQuery(search_input.current?.value || '')} />
                <ButtonInput text={sortAsc ? getTr('en').home.tadpoles.sort_button.label.asc : getTr('en').home.tadpoles.sort_button.label.desc} onclick={() => { setSortAsc(!sortAsc) }} />
            </div>
            <div className='content'>
                {filteredTadpoles.map(tp => (
                    <Tadpole name={tp.username} description={tp.description} seedlings={tp.seedlings.length} />
                ))}
            </div>
        </div>
    )
}

export default Tadpoles
