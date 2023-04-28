import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const Main =()=> {
    return (
        <main className={utilStyles.main}>
            <div className="container">
                <h2 className={` ${utilStyles.mainH2} text-capitalize`}>about</h2>
                <p className={utilStyles.mainText}>Herbert Brown, also known as Satch, is the Senior Developer/Instructor at the <a href="www.mscoding.org" target="_blank" className={utilStyles.codingLink}>Mississippi Coding Academies</a>. He enjoys learning and teaching others how to code.</p>
                <h2 className={` ${utilStyles.mainH2} text-capitalize`}>interests</h2>
                <p className={utilStyles.mainText}>Outside of work, Satch enjoys DJing, collecting vinyl, working out, and exploring creativity.</p>
                <h2 className={` ${utilStyles.mainH2} text-capitalize`}>stuff i can do or have learned</h2>
                <ul className="main-list list-unstyled">
                    <li className={utilStyles.mainListItem}>HTML</li>
                    <li className={utilStyles.mainListItem}>CSS</li>
                    <li className={utilStyles.mainListItem}>JavaScript</li>
                    <li className={utilStyles.mainListItem}>Python</li>
                    <li className={utilStyles.mainListItem}>MySQL</li>
                    <li className={utilStyles.mainListItem}>GraphQL</li>
                    <li className={utilStyles.mainListItem}>Bootstrap</li>
                    <li className={utilStyles.mainListItem}>React.js</li>
                    <li className={utilStyles.mainListItem}>Node.js & Express</li>
                    <li className={utilStyles.mainListItem}>Three.js</li>
                    <li className={utilStyles.mainListItem}>PHP</li>
                    <li className={` ${utilStyles.mainListItem}${utilStyles.mainListItemSub}`}>I built this using Next.js so I guess I can add this as well...</li>
                </ul>
            </div>
        </main>
    )
}

export default Main