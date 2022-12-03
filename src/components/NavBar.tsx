import React from "react";
import styles from "../styles/navBar.module.css";
import Image from "next/image";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLogin } from "react-icons/md";
import Link from "next/link";
export const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <Image
        src="https://res.cloudinary.com/hire-station/image/upload/v1668150540/dirgahyu/dirgahyu-small_c7dbos.png"
        alt="Galaxy"
        height={1000}
        width={1000}
        className={styles.logoImg}
      />
      <div className={styles.navSection}>
        <ul className={styles.nav_ul}>
          <li>
            <Link href="/" className={styles.listItem}>
              <AiFillHome className={styles.icon} /> Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/register" style={{ textDecoration: "none" }}>
              <FaHandshake className={styles.icon} />
              Join Us
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.listItem}>
              <AiFillInfoCircle className={styles.icon} /> About Us
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link href="/volunteerList" style={{ textDecoration: "none" }}>
              <BsFillPeopleFill className={styles.icon} /> Volunteers
            </Link>
          </li>
        </ul>
        <div className={styles.loginbtndiv}>
          <MdLogin className={styles.icon} size={20} />
          <Link href="/login" className={styles.listItem}>
            <span className={styles.LogInBtn}>
              {/* <Link href="/about" className={styles.listItem}> */}
              LogIn
              {/* </Link> */}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
