import React from 'react'
import { Link } from "react-router-dom";

class Header extends React.Component {

    render() {
        return(
        <div className="ui menu">
              <div className="item">
                    <img className="ui mini image" src="/images/logo.png"/>
                </div>
                <div className="right menu">
                    <Link className="right item">
                        Home
                    </Link>
                    <Link className=" right item active">
                        Messages
                    </Link>
                    <Link className="right item">
                        Friends
                    </Link>
                    <Link className="ui item">
                        Logout
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;