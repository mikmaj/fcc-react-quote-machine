import React from 'react';

const GenerateButton = (props) => {
    return (
        <div>
            <button id="new-quote" onClick={props.click}>Generate new</button>
        </div>
    );
};

export default GenerateButton;