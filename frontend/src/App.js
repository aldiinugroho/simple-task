import React, { Component } from "react";
import Head from "./Head";
import Texttoread from "./Textoread";
import Imgforeact from "./Imgforeact";

class App extends Component {
    render() {
        return (
            <div>
                <Head/>
                <Texttoread/>
                <Imgforeact/>
            </div>
        )
    }
}

export default App