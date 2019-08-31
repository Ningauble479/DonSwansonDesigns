import React from 'react'
import PlaceIcon from '@material-ui/icons/Place';

function header() {
    return (
        <div className="header">
            <h1>Don Swanson Designs</h1>
            <a className="headLink" href="https://www.facebook.com">
            <PlaceIcon color="light"/>
            <p>Find Shows</p>
            </a>
        </div>
    )
}

export default header