import Styles from "./styles/Header.module.css";
import Link from "next/link";
function Header() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles["Header-Container"]}>
        <Link href="./">
          <h1>Jared McCarver</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="./">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link href="./about">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link href="./projects">
                <h3>projects</h3>
              </Link>
            </li>
            <li>
              <Link href="./contact">
                <h3>contact</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
