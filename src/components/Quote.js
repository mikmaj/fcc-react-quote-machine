import React from 'react';

const Quote = (props) => {
    return (
        <div>
            <blockquote id="text">{props.quote}</blockquote>
            <p id="author">{props.author}</p>
        </div>
    );
};

export default Quote;