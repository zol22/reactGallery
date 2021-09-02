import React, { useEffect } from "react";
import NotFound from "./NotFound";
import Photo from './Photo';
import { withRouter } from 'react-router-dom' // This is needed when dealing with objects as match

const PhotoContainer = (props) => {

    // Get the results transfered via pros data
    const results = props.data;
    let photos;

    // If there are data returned from searchForm
    if (results.length > 0){
        photos = results.map(photo => (
            <Photo 
            key={photo.id} 
            url={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
            title={photo.title}
            />
        ));
    } else {
        photos = <NotFound />
    }

    /* 
    Used in case of reload on "/search/:query" route, it will allow the browser to reload
    the correct query and toggle back and forward.
    When reloads, let's say the query entered by the user becomes empty
    so this user query and props.match.params.query would not be equal ; therefore
    handleSearch(value) would be called again.
    */
    let value = props.match.params.query;
    //console.log("props.match.params.query....: " + value);
    //console.log("query entered by user...: " + props.title)

    useEffect(() => {
        if (props.title !== value) {
            props.handleSearch(value);
        }
    });

    //console.log(props.loading);

    return(

        <div className="photo-container">
            <ul>{photos}</ul>

        </div>
        )   
}
export default withRouter(PhotoContainer);