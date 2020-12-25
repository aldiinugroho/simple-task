import React, { Component } from "react"
import Head from "./Head"
import Texttoread from "./Textoread"
import Imgforeact from "./Imgforeact"
import Content from "./Content";

class App extends Component {
    render() {
        return (
            <div>
                <Head/>
                <Texttoread/>
                <Imgforeact/>
                <Content/>
            </div>
        )
    }
}

export default App