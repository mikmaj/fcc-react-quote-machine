import React from 'react';

import './TwitterButton.css'

const TwitterButton = () => {
    return (
        <div>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="btn btn-twitter" data-show-count="false"><i className="fab fa-twitter-square"></i> Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
};

export default TwitterButton;