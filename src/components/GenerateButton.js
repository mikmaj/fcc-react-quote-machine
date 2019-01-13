import React from 'react';

const GenerateButton = (props) => {
    return (
        <div>
            <button id="new-quote" onClick={props.click} className="btn btn-success">Generate new</button>
        </div>
    );
};

export default GenerateButton;