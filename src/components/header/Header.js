import React, {Component} from "react";


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={"header_section"}>
                <h1 className={"title"}>El valak car rental</h1>
                <div className={"div_navbar"}>
                    <a href={"/home"} className={"navbar_items"}>Accueil</a>
                    <a href={"/vehicles"} className={"navbar_items"}>Véhicules</a>
                    <a href={"/contact"} className={"navbar_items"}>Contact</a>
                    <a href={"/my_account"} className={"navbar_items"}>Mon compte</a>
                </div>

            </section>

        )
    }
}

export default Home;
