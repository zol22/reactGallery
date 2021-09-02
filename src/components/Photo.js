import React from 'react';

/*  Displays the li and img elements*/
const Photo = (props) => (
    <li>
        <img src={props.url} alt={props.title}></img>
    </li>
)

export default Photo;