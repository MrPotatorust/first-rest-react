import React from "react";
import { Link } from "react-router-dom";

function Nav() {

    return (
        <nav>
            <ul className="nav--list">
                <li><h3 className="nav--heading"><Link to={""}>Home</Link></h3></li>
                <li><h3 className="nav--heading"><Link to={"blogs"}>Blogs</Link></h3></li>
                <li><h3 className="nav--heading"><Link to={"api"}>Api testing</Link></h3></li>
            </ul>
        </nav>
    )
}

export default Nav