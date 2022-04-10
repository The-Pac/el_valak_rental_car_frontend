import React, {Component} from "react";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_home: require("../../image/308.jpg"),
        }
    }

    render() {
        let {image_home} = this.state
        return (
            <section className={"home_section"}>
                <div className={"home_div_content"}>
                    <div className={"description_div"}>
                        <p className={"description_text"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed sapien vitae tellus
                            ultrices dignissim. Aenean nec ultricies erat. Mauris id dictum nisi. Fusce faucibus massa
                            sit amet elementum scelerisque. Integer dictum pretium nibh quis sagittis. Sed ac libero
                            aliquet, feugiat eros at, volutpat nibh. Sed at orci ut dui sodales elementum quis sit amet
                            felis. Vestibulum consequat, diam ut euismod tincidunt, metus lectus pretium nulla,
                            ultricies consectetur ligula justo ut turpis. Ut sit amet lorem hendrerit, pharetra enim ut,
                            mattis dolor. Cras eget odio consectetur, varius felis tempus, elementum turpis. Quisque
                            convallis et lectus in faucibus. Suspendisse et consequat arcu. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in aliquam lacus. Ut
                            dictum ornare suscipit. Vestibulum quis sapien suscipit, egestas nisl sed, semper ipsum.
                            Mauris sed est id sapien convallis commodo. Curabitur ut tristique diam, eget vehicula
                            sapien. Suspendisse egestas posuere
                        </p>
                    </div>
                    <div className={"image_div_home"}>
                        <img className={"image_home"} src={image_home} alt={""}/>
                    </div>
                </div>


            </section>

        )
    }
}

export default Home;
