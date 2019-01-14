import React from 'react';

import './GenerateButton.css'

const GenerateButton = (props) => {
    return (
        <div>
            <button id="new-quote" onClick={props.click} className="genbtn">Generate new</button>
        </div>
    );
};

export default GenerateButton;