import { BsEnvelope, BsLinkedin } from "react-icons/bs"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Navbar =()=> {
    return (
        <ul className={`nav nav-pills nav-fill justify-content-around ${utilStyles.topNav}`}>
            <li className={`nav-item ${utilStyles.topNavItem}`}>
                <a className={`nav-link text-capitalize text-decoration-none ${utilStyles.topNavLink}`} href="mailto:satchwerk@gmail.com">email <BsEnvelope /></a>
            </li>
            <li className={`nav-item ${utilStyles.topNavItem}`}>
                <a className={`nav-link text-capitalize text-decoration-none ${utilStyles.topNavLink}`} href="https://www.linkedin.com/in/herbert-brown-592a96145/" target="_blank">linkedin <BsLinkedin /></a>
            </li>
        </ul>
    )
}

export default Navbar