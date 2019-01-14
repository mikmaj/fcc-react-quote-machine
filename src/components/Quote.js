import React from 'react';

import './Quote.css'

const Quote = (props) => {
    return (
        <div className="mb-5">
            <blockquote id="text" className="quote">"{props.quote}"</blockquote>
            <p id="author" className="author">- {props.author} in <a href={props.show_url} target="_blank" rel="noopener noreferrer"> {props.show} </a></p>
        </div>
    );
};

export default Quote;