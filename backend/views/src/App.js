import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from "./mainpage/Mainpage"
import Resultpage from "./resultpage/Resultpage"
import Errorpage from "./errorpage/Errorpage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Mainpage}/>
                    <Route path="/result" component={Resultpage}/>
                    <Route component={Errorpage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App