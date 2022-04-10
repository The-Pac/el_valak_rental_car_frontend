import React, {Component} from "react";


class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let {img, name} = this.props
        return (
            <div className={"vehicle_div"}>
                <img src={img} alt={"image_car"}/>
                <p className={"description_image"}>{name}</p>
            </div>

        )
    }
}

export default Vehicle;
