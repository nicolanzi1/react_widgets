import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './auto';
import Clock from './clock';
import Weather from './weather';
import Tabs from './tabs';

const names = [
    'Nick',
    'Lu',
    'Channy',
    'Mary',
    'Rachel',
    'Monica',
    'Phoebe',
    'Ross'
];

const panes = [
    {title: 'one', content: 'Hi there sport'},
    {title: 'two', content: 'Hola amigo'},
    {title: 'tres', content: 'Ciao amico'}
];

function Root() {
    return(
        <div>
            <Clock />
            <Weather />
            <div className='interactive'>
                <Tabs panes={panes} />
                <AutoComplete names={names} />
            </div>
        </div>
    );
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById('main'));
});