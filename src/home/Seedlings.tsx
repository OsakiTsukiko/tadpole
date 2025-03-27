import { useOutletContext } from 'react-router';
import '../scss/styles.css'
import { Tadpole } from '../domain/user';
import { ButtonInput, TextInput } from '../auth/Input';
import React, { useState } from 'react';
import { getTr } from '../utils/translation';
import Seedling from './Seedling';
import { useTadpoles } from '../TadpoleProvider';

function Seedlings() {
    const { currentTP } = useTadpoles();
    
    let search_input: React.RefObject<HTMLInputElement | null> = React.createRef();

    const originalSeedlings = currentTP?.seedlings || [];

    const [searchQuery, setSearchQuery] = useState('');

    // Filter seedlings based on search query
    const filteredSeedlings = originalSeedlings.filter(seedling =>
        seedling.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className='seedlings'>
            <div className='top-bar'>
                <TextInput id='search' span={getTr('en').home.seedling.search_input.label} placeholder={getTr('en').home.seedling.search_input.placeholder} name='search' autocomplete='search' type='text' input_ref={search_input} />
                <ButtonInput disabled={false} text={getTr('en').home.seedling.search_button.label} onclick={() => setSearchQuery(search_input.current?.value || '')} />
            </div>
            <div className='content'>
                {filteredSeedlings.map(seedling => (
                    <Seedling name={seedling.name} description={seedling.description} sprinkles={seedling.sprinkles.length} />
                ))}
            </div>
        </div>
    )
}

export default Seedlings
