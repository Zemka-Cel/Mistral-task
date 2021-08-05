import React from 'react';

const MovieListHeading = (props) => {
    return (
        <div className="col col-3">
            <h1 className="m-0 p-0">{props.heading}</h1>
        </div>
    );
}

export default MovieListHeading;