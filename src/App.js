import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import OldHome from "../src/old-home"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Provider} from "react-redux";
import whoReducer
    from "./tuiter/reducers/who-reducer";
import tuitsReducer from "./tuiter/reducers/tuits-reducer"
import {configureStore}
    from '@reduxjs/toolkit';

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path={"/*"}
                               element={<Labs/>}/>
                        <Route path="/hello"
                               element={<HelloWorld/>}/>
                        <Route exact path="/tuiter/*"
                               element={<Tuiter/>}/>
                        <Route path="/old-home"
                               element={<OldHome/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;