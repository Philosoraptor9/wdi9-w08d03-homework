import React from 'react';
import GiphyItem from './GiphyItem';

const GiphyList = (props) => {
    const giphyItems = props.gifs.map((image) =>{
        return <GiphyItem key={image.id} gif={image} />
    });
    return (
        <ul>{giphyItems}</ul>
    )
}

export default GiphyList;