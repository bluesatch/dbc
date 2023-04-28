import Navbar from "./Navbar"
import Image from "next/image"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Header =()=> {
    return(
        <header className={utilStyles.header}>
            <div className="container">
                <div className="header-content">
                    <Image 
                        priority
                        src="/profile.jpg"
                        className={`img-fluid rounded ${utilStyles.profilePic}`}
                        width={144}
                        height={144}
                        alt='image'
                    />
                    <h1 className={`text-center ${utilStyles.headerName}`}>satch</h1>
                    <p className={`${utilStyles.brandingText} text-center`}>doer of stuff</p>
                    <p className={` ${utilStyles.website} text-center`}>satchwerk.com <span className={utilStyles.smallText}>(in the works...)</span></p>
                    <p className={`text-center ${utilStyles.githubText}`}><a href="https://bluesatch.github.io/githubio/" target="_blank" className={` ${utilStyles.githubio} text-decoration-none`}>githubio</a></p>
                </div>
                <Navbar />
            </div>
        </header>
    )
}

export default Header