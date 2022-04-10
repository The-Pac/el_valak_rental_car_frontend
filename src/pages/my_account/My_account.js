import React, {Component} from "react";
import axios from "axios";


class My_account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            not_good_values: [';', '<', '/', '{', '}', '(', ')', '[', ']']
        }
    }


    check_input = (event) => {
        if (document.getElementById("err_p").innerText === "Erreur de connexion") {
            document.getElementById("err_p").removeChild()
        }
        if (this.state.not_good_values.some((not_good_value) => event.target.value.includes(not_good_value))) {
            document.getElementById(event.target.id).style.backgroundColor = "rgba(255,0,0,0.45)"
        } else {
            document.getElementById(event.target.id).style.backgroundColor = "transparent"
            if (event.target.id === "username") {
                this.setState({username: event.target.value})
            } else if (event.target.id === "password") {
                this.setState({password: event.target.value})
            }
        }
    }

    authentification = async () => {
        if (this.state.username && this.state.password) {
            const headers = {
                "Access-Control-Allow-Origin": "*"
            }
            await axios.post('http://localhost:3001/check_user', {
                "username": this.state.username,
                "password": this.state.password
            }, {headers}).then(rep => {
                if (rep.data.error) {
                    document.getElementById("err_p").textContent = "Erreur de connexion"
                }
                if (rep.data.valid) {
                    this.setState(() => ({pseudo: rep.data.pseudo, image: rep.data.image}))

                    localStorage.setItem('auth', JSON.stringify(true));
                }
            });
        }
    }

    render() {
        return (
            <section className={"auth_section"}>
                {
                    localStorage.getItem("auth") ?
                        <div>

                        </div>
                        :
                        <form className={"auth_form"}>
                            <div className={"title_div"}>
                                <h2>Connexion</h2>
                                <p id={"err_p"}/>
                            </div>
                            <div className={"auth_div_main"}>
                                <input className={"input_text"} id={"username"} placeholder={"Nom d'utilisateur"}
                                       required={true} type={"text"}
                                       minLength={3}
                                       onChange={(event) => this.check_input(event)}/>
                                <input className={"input_text"} autoComplete="off" id={"password"}
                                       placeholder={"Mot de passe"}
                                       required={true}
                                       type={"password"}
                                       minLength={8}
                                       onChange={(event) => this.check_input(event)}/>
                            </div>
                            <button className={"auth_div_button"} type={"submit"}
                                    onClick={() => this.authentification()}>
                                <p>
                                    Connexion
                                </p>
                            </button>
                        </form>
                }

            </section>

        )
    }
}

export default My_account;
