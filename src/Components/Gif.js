import React from 'react';

const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} role="presentation" />
  </li>
);

export default Gif;
