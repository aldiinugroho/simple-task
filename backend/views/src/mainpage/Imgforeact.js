import React, { Component } from "react"
import imgreact from "../Assets/reactgif.gif"

class Imgforeact extends Component {
    render() {
        return (
            <div className="img_conf">
                <img draggable="false" src={imgreact} alt="react"/>
            </div>
        )
    }
}

export default Imgforeact