
import {Link} from 'react-router-dom'
import RoutingPath from "../../routing/RoutingPath";

// all the layout is done with Tachyons.io

export default function NavBar() {


    return (
        <nav className="pv4 ph3 ph5-ns tc">
            <ul >
                <li className="f5 link dim dark-pink dib mr3 mr4-ns">
                    <Link to={RoutingPath.infoView}>Info MissManga</Link>
                </li>
                <li className="f5 link dim dark-pink dib mr3 mr4-ns">
                    <Link to={RoutingPath.contactView}>Contact</Link>
                </li>
                <li className="f5 link dim dark-pink dib mr3 mr4-ns">
                    <Link to={RoutingPath.aboutView}>About us</Link>
                </li>

              {/*ternary*/}
                    <li className="f5 link dim dark-pink dib mr3 mr4-ns">
                        <Link  to={RoutingPath.mainView}>My page</Link></li>

                    <li className="f5 link dim dark-pink dib mr3 mr4-ns">
                        <Link
                              to={RoutingPath.loginView}>Log In</Link></li>
            </ul>
        </nav>
    )
}