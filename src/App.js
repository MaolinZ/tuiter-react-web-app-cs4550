import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import OldHome from "../src/old-home"
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path={"/*"}
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter"
                           element={<Tuiter/>}/>
                    <Route path="/old-home"
                        element={<OldHome/>}/>
                </Routes>
            </div>
        </BrowserRouter>
);
}
export default App;