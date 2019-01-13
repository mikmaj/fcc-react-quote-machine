import React from 'react';

import './Quote.css'

const Quote = (props) => {
    return (
        <div>
            <blockquote id="text" className="quote">"{props.quote}"</blockquote>
            <p id="author" className="author">- {props.author}</p>
        </div>
    );
};

export default Quote;