import Image from "next/image";
import React from "react";
import { teamMembers } from "../data/data";
import styles from "../styles/component.module.css";

export default function About() {
  return (
    <div className={styles.about_container}>
      <span className={styles.title_label}>About Dirgahyu</span>
      <div className={styles.content_description}>
        <span className={styles.about_span}>
          Dirghayu is the website whose main purpose is to solve the issue of
          the blood management by the means of website. With the motto of “A
          pint can save many lives”, the core goal of this website is to manage
          and mitigate the bridge between the donor, blood banks and the
          receiver.
        </span>
        <span className={styles.about_span}>
          The main motivation for this website has to be the MRR group in
          Facebook. We can see tons of blood requests by the people and we
          thought why do not we create a website that will hold collective
          information of blood banks that will show all the blood, plasma
          related data and people will not have to ring phone of every blood
          banks
        </span>
      </div>
      <span className={styles.title_label}>Our Team</span>
      <div className={styles.team_section}>
        {teamMembers.map((data) => (
          <div key={data.id} className="image_label_content">
            <Image
              src={data.image}
              height={100}
              width={100}
              alt="profileImage"
              className={styles.avatarImage}
            />
            <div className={styles.name_status_label}>
              <span
                className="name_label"
                style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                {data.name}
              </span>
              <span className="status_label">{data.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
