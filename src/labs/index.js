import Nav from "../nav";
import Assignment6 from "./a6";
import Assignment7 from "./a7";
import {Routes, Route} from "react-router";

function Labs() {
    return (
        <div>
            <Nav/>
            <strong>Note: </strong>
            <em>
                The Tuiter link in Nav and the Tuiter link in the old
                homepage are NOT the same. The old homepage only includes the
                Tuiter as of A5
            </em>
            <Routes>
                <Route index
                       element={<Assignment6/>}/>
                <Route path="/a7"
                       element={<Assignment7/>}/>
            </Routes>
        </div>
    );
}

export default Labs;
