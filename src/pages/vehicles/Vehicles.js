import React, {Component} from "react";
import Vehicle from "./Vehicle";
import axios from "axios";


class Vehicles extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list_vehicles: null
        }
    }

    componentDidMount() {
        this.get_vehicles().then()
    }

    get_vehicles = async () => {
        const headers = {
            "Access-Control-Allow-Origin": "*"
        }
        await axios.post('http://localhost:4005/get_vehicles',
            {}, {headers}).then(rep => {
            if (rep.status === 200) {
                let data_vehicles = rep.data
                console.log(data_vehicles)
                this.setState({list_vehicles: data_vehicles})
            }
        });
    }

    render() {
        let {list_vehicles} = this.state
        return (
            <section className={"vehicles_section"}>
                <div className={"selection_div"}>
                    <select>
                        <option value="" disabled selected hidden>Une marque</option>
                    </select>
                    <select>
                        <option value="" disabled selected hidden>Une couleur</option>
                    </select>
                    <button className={"reset_button"}>Reset</button>
                </div>

                {
                    list_vehicles.map(vehicle => {
                        return <Vehicle img={vehicle.img} name={vehicle.name}/>
                    })
                }

            </section>

        )
    }
}

export default Vehicles;
