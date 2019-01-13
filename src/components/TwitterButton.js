import React from 'react';

const styles = {
    background: "#00ACEE",
    borderRadius: 5,
    color: "#fff",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0075a2",
    marginLeft: 10
}

const TwitterButton = () => {
    return (
        <div>
            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" style={styles} className="btn" data-show-count="false"><i className="fab fa-twitter-square"></i> Tweet</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    );
};

export default TwitterButton;