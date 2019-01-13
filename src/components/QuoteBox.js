import React, { Component } from 'react';

import Quote from './Quote'
import GenerateButton from './GenerateButton'
import TwitterButton from './TwitterButton'

const styles = {
    width: 500,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 10
}

class QuoteBox extends Component {
    render() {
        return (
            <div id="quote-box" style={styles}>
                <h1>This is the quote container</h1>
                <Quote />
                <GenerateButton />
                <TwitterButton />
            </div>
        );
    }
}

export default QuoteBox;