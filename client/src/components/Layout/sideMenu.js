import React from 'react'
import { Link } from "react-router-dom";
class SideMenu extends React.Component {

    render() {
        return(
            <div className="ui vertical menu">
            <div className="item">
              <div className="header">Products</div>
              <div className="menu">
                <Link to="#" className="item">Enterprise</Link>
                <Link to="#" className="item">Consumer</Link>
              </div>
            </div>
            <div className="item">
              <div className="header">CMS Solutions</div>
              <div className="menu">
                <Link to="#" className="item">Rails</Link>
                <Link to="#" className="item">Python</Link>
                <Link to="#" className="item">PHP</Link>
              </div>
            </div>
          </div> 
        )
    }
}

export default SideMenu;