import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs'

const Footer =()=> {
    return(
        <footer className={utilStyles.footer}>
            <section className={` ${utilStyles.section} ${utilStyles.topFooter}`}>
                <div className="container">
                    <nav className={`nav ${utilStyles.bottomNav} justify-content-between`}>
                        <a href="https://twitter.com/satchwerk" className={`nav-link ${utilStyles.bottomNavLink}`} target="_blank"><BsTwitter /><span className="visually-hidden">twitter</span></a>
                        <a href="https://www.instagram.com/djdaddybug/" className={`nav-link ${utilStyles.bottomNavLink}`} target="_blank"><BsInstagram /><span className="visually-hidden">instagram</span></a>
                        <a href="https://github.com/bluesatch" className={`nav-link ${utilStyles.bottomNavLink}`} target="_blank"><BsGithub /><span className="visually-hidden">github</span></a>
                    </nav>
                </div>
            </section>
            <section className={`${utilStyles.section} ${utilStyles.bottomFooter}`}>
                <div className="container">
                    <p className={` ${utilStyles.colophon} text-center`}>site by satchwerk &copy; 2023</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer