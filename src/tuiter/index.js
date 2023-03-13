import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index"
import Explore from "./explore";
import "./index.css"
import whoReducer
    from "./reducers/who-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
    {reducer: {who: whoReducer}});

function Tuiter() {
    return (
    <Provider store={store}>
        <div>
            <link rel="stylesheet" href="../../vendors/bootswatch/bootstrap.min.css"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                  rel="stylesheet"/>
            <div className="row mt-3">
                <Nav/>
                <h1>Tuiter</h1>
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={'home'}/>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Explore/>
                </div>
                <div
                    className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </div>
    </Provider>
    )
}
export default Tuiter