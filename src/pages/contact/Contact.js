import React, {Component} from "react";


class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={"contact_section"}>
                <form className={"contact_form"}>
                    <div className={"name_div"}>
                        <div className={"input_div"}>
                            <label>Nom*</label>
                            <input type={"text"} className={"name_div"} required/>
                        </div>
                        <div className={"input_div"}>
                            <label>Prenom*</label>
                            <input type={"text"} className={"name_div"} required/>
                        </div>
                    </div>

                    <div className={"input_div"}>
                        <label>Email*</label>
                        <input type={"email"} className={"input_mail"} required/>
                    </div>
                    <div className={"input_div"}>
                        <label>Message*</label>
                        <input type={"text"} className={"input_message"} required/>
                    </div>

                    <button onClick={""} className={"button_send"}>Envoyez le message au plus belle homme</button>
                </form>
            </section>

        )
    }
}

export default Contact;
