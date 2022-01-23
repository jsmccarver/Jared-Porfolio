import Styles from "./styles/Header.module.css";
import Link from "next/link";
function Header() {
  return (
    <div className={Styles.navbar}>
      <div className={Styles["Header-Container"]}>
        <Link href="./">
          <a>
            <h1>Jared McCarver</h1>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="./">
                <a>
                  <h3>home</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./about">
                <a>
                  <h3>about</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#projects">
                <a>
                  <h3>projects</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./contact">
                <a>
                  <h3>contact</h3>
                </a>
              </Link>
            </li>
            <li>
              <Link href="./Jared McCarver Resume.pdf">
                <a>
                  <h3>resume</h3>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
export default Header;
