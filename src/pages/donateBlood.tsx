import styles from "../styles/component.module.css";
import { useState } from "react";
import Image from "next/image";
import { bloodGroup, rhesusD } from "../data/data";
export default function DonateBlood() {
  const [bGroup, setBGroup] = useState("A");
  const [rhesus, setRhesus] = useState("+ve");
  const donateHandler = () => {};
  return (
    <div className={styles.requestBloodContainer}>
      <div className={styles.donate_blood_icon_container}>
        <div className={styles.req_blood_label_content}>
          <span
            className={styles.req_blood_label}
            style={{ paddingLeft: "0.6rem" }}
          >
            Donate Blood
          </span>

          <Image
            src="https://res.cloudinary.com/hire-station/image/upload/v1670075478/dirgahyu/donate_blood_1_idhsi5.png"
            alt="req_blood_icon"
            height={1000}
            width={1000}
            className={styles.donate_blood_icon}
          ></Image>
        </div>
        <span className={styles.donate_desc_label}>
          Sometimes <span className={styles.primary_label_color}>MONEY</span>{" "}
          cannot save life but donated{" "}
          <span className={styles.primary_label_color}>Blood </span>can.
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
        <button onClick={() => donateHandler()} className={styles.request_btn}>
          Donate
        </button>
      </form>
    </div>
  );
}
