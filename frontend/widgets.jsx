import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const panes = [
    {title: 'one', content: 'Hi there sport'},
    {title: 'two', content: 'Hola amigo'},
    {title: 'tres', content: 'Ciao amico'}
];

function Root() {
    return(
        <div>
            <Clock />
            <div className='interactive'>
                <Tabs panes={panes} />
            </div>
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(<Root />, document.getElementById('main'));
});