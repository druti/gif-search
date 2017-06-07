import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => {
  const results = props.data;
  const gifs = results.map(g => <Gif url={g.images.fixed_height.url} key={g.id} />);

  return(
    <ul className="gif-list">
      {gifs.length ? gifs : <NoGifs />}
    </ul>
  );
}

export default GifList;
