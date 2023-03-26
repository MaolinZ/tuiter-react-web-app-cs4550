import TuitsList from "../tuits";
import WhatsHappening from "./whats-happening";
import "../index.css"
import "./home.css"

const HomeComponent = () => {

    return(
        <div className={"home-component"}>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </div>
    )
}
export default HomeComponent