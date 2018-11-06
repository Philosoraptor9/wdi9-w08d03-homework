import React from 'react';

const GiphyItem = (props) =>{
    return(
        <li>
            <img src={props.gif.images.downsized.url} />
        </li>
    )
}

export default GiphyItem;