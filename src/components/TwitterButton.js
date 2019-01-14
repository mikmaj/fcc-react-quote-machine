import React from 'react';

import './TwitterButton.css'

const TwitterButton = (props) => {
    const tweet_path = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + props.quote + '" ' + props.author)

    return (
        <div>
            <a href={tweet_path} id="tweet-quote" className="btn btn-twitter" data-show-count="false"><i className="fab fa-twitter-square"></i> Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
};

export default TwitterButton;