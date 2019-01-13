import React, { Component } from 'react';

class Quote extends Component {
    render() {
        return (
            <div>
                <blockquote id="text">This is a quote</blockquote>
                <p id="author">This is the author</p>
            </div>
        );
    }
}

export default Quote;