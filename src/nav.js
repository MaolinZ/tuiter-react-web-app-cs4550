import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> |
            <Link to="/old-home">Old Home</Link>
            {/* Added extra link to keep make old home page links available */}
        </div>
    )
}

export default Nav;