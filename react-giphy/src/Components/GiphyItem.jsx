import React from 'react';

const GiphyItem = (image) =>{
    return(
        <li>
            <img src={image.gif.url} />
        </li>
    )
}

export default GiphyItem;