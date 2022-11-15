import React from "react";
import styles from "../styles/navBar.module.css";
import Image from "next/image";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import { FaHandshake } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdLogin } from "react-icons/md";

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
          <li className={styles.listItem}>
            <AiFillHome className={styles.icon} /> Home
          </li>
          <li className={styles.listItem}>
            <FaHandshake className={styles.icon} />
            Join Us
          </li>
          <li className={styles.listItem}>
            <AiFillInfoCircle className={styles.icon} /> About Us
          </li>
          <li className={styles.listItem}>
            <BsFillPeopleFill className={styles.icon} /> Volunteers
          </li>
        </ul>
        <div className={styles.loginbtndiv}>
          {/* <Link to="/login"> */}

          <MdLogin className={styles.icon} size={20} />
          <span className={styles.LogInBtn}>LogIn</span>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};
