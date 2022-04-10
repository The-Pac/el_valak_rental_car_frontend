import {Route, Routes} from "react-router";
import React, {Component} from "react";
import Home from "../pages/home/Home";
import My_account from "../pages/my_account/My_account";
import Vehicles from "../pages/vehicles/Vehicles";
import Contact from "../pages/contact/Contact";


class Routing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/my_account" element={<My_account/>}/>
                <Route path="/vehicles" element={<Vehicles/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>

        )
    }
}

export default Routing;
