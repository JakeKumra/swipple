import React from "react"
import barShelf from '../images/bar-shelf.jpg'

export default function Main() {

    return (
        <>
            <div className="main-container">
                {/* <img className="main-image" src="https://source.unsplash.com/6UIonphZA5o/w=1000" alt="a bar shelf"></img> */}
                <img className="main-image" src={barShelf} alt="a bar shelf"></img>
                <div className="main-div">
                    <h3 className="main-title">Do you have unwanted alcohol lying around?</h3>
                    <button className="main-trade-btn">Exchange now</button>
                    <a className="main-info">Get info</a>
                </div>
            </div>
        </>
    )
}