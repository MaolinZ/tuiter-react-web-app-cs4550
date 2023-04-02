import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index"
import Explore from "./explore";
import HomeComponent from "./home";
import "./index.css"
import whoReducer
    from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer"
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {Route, Routes} from "react-router";
const store = configureStore(
    {reducer: {who: whoReducer, tuitsData: tuitsReducer}});

function Tuiter() {
    return (
    <Provider store={store}>
        <div>
            <link rel="stylesheet" href="/vendors/bootswatch/bootstrap.min.css"/>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                  rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/fontawesome.min.css"/>
            <div className="row mt-3">
                <Nav/>
                <h1>Tuiter</h1>
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <Routes>
                        <Route index element={<NavigationSidebar active={'home'}/>}/>
                        <Route path={"/explore"}
                            element={<NavigationSidebar active={'explore'}/>}/>
                    </Routes>
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path={"/explore"}
                            element={<Explore/>}/>
                    </Routes>
                </div>
                <div
                    className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route path={"/explore"}
                            element={<WhoToFollowList/>}/>
                        <Route index
                               element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    </Provider>
    )
}
export default Tuiter