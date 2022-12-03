import Image from "next/image";
import React, { useState } from "react";
import { bloodGroup, rhesusD } from "../data/data";
import styles from "../styles/component.module.css";

export default function Register() {
  const [bGroup, setBGroup] = useState("A");
  const [rhesus, setRhesus] = useState("+ve");
  const donateHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className={styles.requestBloodContainer}>
      <div
        className={styles.donate_blood_icon_container}
        // style={{ backgroundColor: "black" }}
      >
        <div className={styles.req_blood_label_content}>
          <span
            className={styles.join_us_label}
            style={{ paddingLeft: "0.6rem" }}
          >
            Join US
          </span>

          <Image
            src="https://res.cloudinary.com/hire-station/image/upload/v1670090664/dirgahyu/pngegg_3_q7rsdd.png"
            alt="req_blood_icon"
            height={1000}
            width={1000}
            className={styles.donate_blood_icon1}
          ></Image>
        </div>
        <span className={styles.donate_desc_label}>
          <span className={styles.primary_label_color}>1 blood donation</span>{" "}
          can save <span className={styles.primary_label_color}>3 lives. </span>
        </span>
      </div>
      <form className={styles.requestForm}>
        <div className={styles.input_flex}>
          <input
            type="text"
            placeholder="First Name :"
            className={styles.input_content}
            style={{ marginRight: "3rem" }}
          />
          <input
            type="text"
            placeholder="Last Name :"
            className={styles.input_content}
          />
        </div>
        <input
          type="text"
          placeholder="Enter Location"
          className={styles.input_content}
        />
        <div className={styles.select_input_flex}>
          <select
            name="bloodType"
            value={bGroup}
            onChange={(e) => setBGroup(e.target.value)}
            // className={styles.select_comp}
            className={styles.input_content1}
            style={{ marginRight: "3rem" }}
          >
            {bloodGroup.map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </select>
          <select
            name="rhesus"
            value={rhesus}
            onChange={(e) => setRhesus(e.target.value)}
            className={styles.input_content1}
          >
            {rhesusD.map((data, index) => (
              <option key={index} value={data}>
                {data}{" "}
              </option>
            ))}
          </select>
        </div>
        <input
          type="number"
          placeholder="Phone No:"
          className={styles.input_content}
          style={{ marginBottom: "1.5rem" }}
        />
        <input
          type="string"
          placeholder="Email:"
          className={styles.input_content}
          style={{ marginBottom: "1.5rem" }}
        />
        <button onClick={donateHandler} className={styles.request_btn}>
          Register
        </button>
      </form>
    </div>
  );
}
