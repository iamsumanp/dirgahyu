import React from "react";
import styles from "../styles/navBar.module.css";
import Image from "next/image";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdLogin } from "react-icons/md";
import Link from "next/link";
export const NavBar = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <div className={styles.test}>
      <div className={styles.main_container} onClick={() => Close()}>
        <nav className={styles.navBar} onClick={(e) => e.stopPropagation()}>
          <Image
            src="https://res.cloudinary.com/hire-station/image/upload/v1668150540/dirgahyu/dirgahyu-small_c7dbos.png"
            alt="Galaxy"
            height={1000}
            width={1000}
            className={styles.logoImg}
          />
          <div className={styles.navSection}>
            <ul className={click ? styles.nav_ul_active : styles.nav_ul}>
              <li className={styles.listItem}>
                <Link
                  href="/"
                  className={styles.nextLink}
                  onClick={handleClick}
                >
                  <AiFillHome className={styles.icon} />
                  Home
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/register" className={styles.nextLink}>
                  <FaHandshake className={styles.icon} />
                  Join Us
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/about" className={styles.nextLink}>
                  <AiFillInfoCircle className={styles.icon} />
                  About Us
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  href="/volunteerList"
                  style={{ textDecoration: "none" }}
                  className={styles.nextLink}
                >
                  <BsFillPeopleFill className={styles.icon} />
                  Volunteers
                </Link>
              </li>
            </ul>
            <div className={styles.login_hamburger}>
              <div className={styles.nav_icon} onClick={handleClick}>
                {click ? (
                  <IoMdClose size={35} />
                ) : (
                  <GiHamburgerMenu size={30} />
                )}
              </div>
              <div className={styles.loginbtndiv}>
                <Link href="/login" className={styles.nextLink}>
                  <MdLogin className={styles.icon} size={20} />
                  <span className={styles.LogInBtn}>
                    {/* <Link href="/about" className={styles.listItem}> */}
                    LogIn
                    {/* </Link> */}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
