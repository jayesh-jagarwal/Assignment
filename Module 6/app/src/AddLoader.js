import React from 'react'
import './AddLoader.css';

function Loader() {
    return (
        <div className ="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader