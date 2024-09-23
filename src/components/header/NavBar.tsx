import Link from "next/link";
import styles from "./header.module.css";
// import { FaCode } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <Link href="./" className={styles.logo}>
            Hello</Link>
        </div>
        <ul className={styles.navLinks}>
            <Link className={styles.navLink} href= "./" >Home</Link>
            <Link className={styles.navLink} href= "/about" >About</Link>
            <Link className={styles.navLink} href= "/articles" >Articles</Link>
            <Link className={styles.navLink} href= "/admin" >Admin</Link>
        </ul>
    </nav>
  )
}

export default NavBar