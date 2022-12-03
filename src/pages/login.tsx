import React, { useState } from "react";
import styles from "../styles/login.module.css";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { HiUser, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [check, setCheck] = useState(false);

  const onchangeCheckbox = (event: any) => {
    //! find alternative
    setCheck(event.target.checked);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.dirgahyu_icon}>
        <Image
          src={
            "https://res.cloudinary.com/hire-station/image/upload/v1668150540/dirgahyu/dirgahyu-large_mxcnmb.png"
          }
          height={1000}
          width={1000}
          alt="dirgahyu_icon"
          className={styles.dirgahyu_icon_image}
        />
      </div>
      <div className={styles.login_content}>
        <span className={styles.login_label}>Login</span>
        <div className={styles.user_box}>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className={styles.user_box_input}
            required={true}
          />
          <label className={styles.user_box_label}>
            <HiUser /> User Id
          </label>
        </div>
        <div className={styles.user_box}>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.user_box_input}
            required={true}
          />
          <label className={styles.user_box_label}>
            <HiLockClosed /> Password
          </label>
        </div>
        <div className={styles.remember_checkbox_content}>
          <input
            type="checkbox"
            checked={check}
            onChange={onchangeCheckbox}
            style={{ cursor: "pointer" }}
          ></input>
          <label className={styles.labelclass}>Remember Me</label>
        </div>

        <button className={styles.loginBtn}>Login</button>
        <div className={styles.loginAuthMethodsContainer}>
          <span className={styles.sign_in_cred_label}>Or Login with:</span>
          <BsFacebook
            fill="	#4267B2"
            className={styles.icon_auth}
            // size={20}
          />{" "}
          <AiFillTwitterCircle fill=" #00acee" className={styles.icon_auth} />{" "}
          <FcGoogle className={styles.icon_auth} />
        </div>
      </div>
    </div>
  );
}
