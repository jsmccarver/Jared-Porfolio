import Styles from "./styles/Header.module.css";
import Link from "next/link";
import { useState } from "react";
function Header() {
  const [showNav, setNavValue] = useState(false);
  return (
    <div className={Styles.navbar}>
      <div
        className={
          showNav ? Styles["Mobile-Menu-Container"] : Styles["Header-Container"]
        }
      >
        <Link href="./">
          <a>
            <div className={Styles.Logo}>
              <img src="/logo.svg" /> <h3>Jared McCarver</h3>
            </div>
          </a>
        </Link>
        <nav>
          <ul>
            <li>
              <img
                onClick={(e) => {
                  setNavValue(!showNav);
                  console.log(showNav);
                }}
                className={Styles.burgericon}
                src="menu-icon.svg"
              />
            </li>
            <li
              onClick={(e) => {
                setNavValue(false);
              }}
            >
              <Link href="./">
                <a>
                  <h3>home</h3>
                </a>
              </Link>
            </li>
            <li
              onClick={(e) => {
                setNavValue(false);
              }}
            >
              <Link href="./about">
                <a>
                  <h3>about</h3>
                </a>
              </Link>
            </li>
            <li
              onClick={(e) => {
                setNavValue(false);
              }}
            >
              <Link href="./projects">
                <a>
                  <h3>projects</h3>
                </a>
              </Link>
            </li>
            <li
              onClick={(e) => {
                setNavValue(false);
              }}
            >
              <Link href="/#contact">
                <a>
                  <h3>contact</h3>
                </a>
              </Link>
            </li>
            <li
              onClick={(e) => {
                setNavValue(false);
              }}
            >
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
