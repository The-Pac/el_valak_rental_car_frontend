import React, {Component} from 'react'
import Routing from "./Routing";
import {BrowserRouter} from "react-router-dom";
import Header from "../components/header/Header";


class App extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <BrowserRouter>
                <div className={"home_div"}>
                    <div className={"main"}>
                        <Header/>
                        <Routing/>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
