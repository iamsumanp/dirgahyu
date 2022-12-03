import Image from "next/image";
import { bloodGroup, rhesusD } from "../data/data";
import styles from "../styles/component.module.css";
import { useState } from "react";

export default function RequestBlood() {
  const [bGroup, setBGroup] = useState("A");
  const [rhesus, setRhesus] = useState("+ve");
  const requestHandler = () => {};

  return (
    <div className={styles.requestBloodContainer}>
      <div className={styles.req_blood_icon_container}>
        <div className={styles.req_blood_label_content}>
          <span className={styles.req_blood_label}>Request Blood</span>
          <span style={{ fontSize: "1.1rem" }}>
            We send mail to donors after registration
          </span>
        </div>
        <Image
          src="https://res.cloudinary.com/hire-station/image/upload/v1670058358/dirgahyu/request_blood_1_ushq6s.png"
          alt="req_blood_icon"
          height={1000}
          width={1000}
          className={styles.req_blood_icon}
        ></Image>
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
          placeholder="Enter valid location"
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
        <button onClick={() => requestHandler()} className={styles.request_btn}>
          Request
        </button>
      </form>
    </div>
  );
}
