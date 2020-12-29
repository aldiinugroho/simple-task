import React, { Component } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Mainpage from "./mainpage/Mainpage"
import Detailpage from "./detailpage/Detailpage"
import Errorpage from "./errorpage/Errorpage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Mainpage}/>
                    <Route path="/detail" component={Detailpage}/>
                    <Route component={Errorpage} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App