import React, { Component } from 'react';

import Quote from './Quote'
import GenerateButton from './GenerateButton'
import TwitterButton from './TwitterButton'

const boxStyles = {
    width: 500,
    margin: "auto",
    borderRadius: 8,
    marginTop: 100,
    padding: 20,
    backgroundColor: "#fff"
}

const quoteContainerStyles = {
    padding: 10,
    width: 500,
    margin: "auto",
}

class QuoteBox extends Component {
    state = {
        quotes: [
            { author: 'Charlie Chaplin', quote: 'You have to believe in yourself, that\'s the secret. Even when I was in the orphanage, when I was roaming the street trying to find enough to eat, even then I thought of myself as the greatest actor in the world.' },
            { author: 'Henry Ward Beecher', quote: 'It gives one a sudden start in going down a barren, stoney street, to see upon a narrow strip of grass, just within the iron fence, the radiant dandelion, shining in the grass, like a spark dropped from the sun.' },
            { author: 'Francis Scott Key Fitzgerald', quote: 'The hangover became a part of the day as well allowed-for as the Spanish siesta.' },
            { author: 'Charles Kingsley', quote: 'All that we need to make us really happy is something to be enthusiastic about.' },
            { author: 'George Bernard Shaw', quote: 'The more things a man is ashamed of, the more respectable he is.' },
            { author: 'Richard Lee Rhodes', quote: 'The physicist Leo Szilard once announced to his friend Hans Bethe that he was thinking of keeping a diary: \'I don\'t intend to publish it: I\'m merely going to record the facts for the information of God\' \'Don\'t you think God knows the facts?\' Bethe asked. \'Yes,\' said Szilard, \'He knows the facts, but He does not know THIS VERSION OF THE FACTS.\'' },
            { author: 'J. E. Littlewood', quote: 'I recall once saying that when I had given the same lecture several times I couldn\'t help feeling that they really ought to know it by now.' },
            { author: 'Steven Wright', quote: 'I told her I knew when I was going to die because my birth certificate had an expiration date on it.' },
            { author: 'James R. Newman', quote: 'The most painful thing about mathematics is how far away you are from being able to use it after you have learned it.' },
            { author: 'Adlai Ewing Stevenson', quote: 'I have been told that one of the reasons the astronomers of the world cooperate is the fact that there is no one nation from which the entire sphere of the sky can be seen. Perhaps there is in that fact a parable for national statesmen, whose political horizons are all too often limited by national horizons.' },
            { author: 'Henry David Thoreau', quote: 'For every thousand hacking at the leaves of evil, there is one striking at the root.' },
            { author: 'Theodore Parker', quote: 'Truth never yet fell dead in the streets; it has such affinity with the soul of man, the seed however broadcast will catch somewhere and produce its hundredfold.' },
            { author: 'Charles Dickens', quote: 'No one is useless in this world who lightens the burden of it to anyone else.' },
            { author: 'John Locke', quote: 'That which is static and repetitive is boring. That which is dynamic and random is confusing. In between lies art.' },
            { author: 'Ambrose Gwinett Bierce', quote: 'MAD, adj. Affected with a high degree of intellectual independence; at odds with the majority; in short, unusual. It is noteworthy that persons are pronounced mad by officials destitute of evidence that themselves are sane.' },
            { author: 'Lemuel K. Washburn', quote: 'We cannot go ahead without leaving something behind' },
            { author: 'Phillips Brooks', quote: 'We are haunted by an ideal life, and it is because we have within us the beginning and the possibility of it.' },
            { author: 'Ralph Waldo Emerson', quote: 'Striving is perhaps the one and only true elixir, for while we converse with what is above us, we do not grow old, but grow young.' },
            { author: 'Elliot Easton', quote: 'I think one thing we went through was common to a lot of people: You work your whole life to achieve something, then you achieve it and find out that you still have good days and bad days. So you start thinking, \'Is that all there is?\' After a while you calm down and get back to work.' },
            { author: 'William Butler Yeats', quote: 'Grant me an old man\'s frenzy, Myself must I remake Till I am Timon and Lear Or that William Blake Who beat upon the wall Till Truth obeyed his call.' }
        ],
        currQuote: 'We cannot go ahead without leaving something behind',
        currAuthor: 'Lemuel K. Washburn'
    }

    generateNewQuote = () => {
        let num = Math.floor(Math.random() * 20)
        this.setState({
            currAuthor: this.state.quotes[num].author,
            currQuote: this.state.quotes[num].quote
        })
    }

    render() {
        return (
            <div id="quote-box" style={boxStyles}>
                <Quote quote={this.state.currQuote} author={this.state.currAuthor} />
                <div className="row" style={quoteContainerStyles}>
                    <GenerateButton click={this.generateNewQuote} />
                    <TwitterButton />
                </div>
            </div>
        );
    }
}

export default QuoteBox;