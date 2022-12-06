import React from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";
import { BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.contact_connect_bg}>
        <div className={styles.contact_content}>
          <span className={styles.label_rl}>Contact Information:</span>
          <div className={styles.email_phone_content}>
            <span className={styles.email_phone_label}>
              Email: info@dirgahyu.com
            </span>
            <span className={styles.email_phone_label}>
              Phone: +977 9812xxxxxx
            </span>
          </div>
        </div>
        <div className={styles.connect_content}>
          <span className={styles.label_rl}>Get connected with us:</span>
          <div className={styles.social_media_links_content}>
            <BsFacebook className={styles.social_media_icon} fill="	#4267B2" />
            <AiFillTwitterCircle
              className={styles.social_media_icon}
              fill="#00acee"
            />
            <BsYoutube className={styles.social_media_icon} fill="#c4302b" />
            <BsLinkedin className={styles.social_media_icon} fill="#0A66C2" />
          </div>
        </div>
      </div>
      <div className={styles.icon_label_content}>
        <Image
          src="https://res.cloudinary.com/hire-station/image/upload/v1668150540/dirgahyu/dirgahyu-small_c7dbos.png"
          alt="Galaxy"
          height={1000}
          width={1000}
          className={styles.logoImg}
        />
        {/* <span>lorem ipsum</span> */}
        <div className={styles.label_address_content}>
          <span className={styles.dirgahyu_label}>Dirgahyu Foundation</span>
          <span className={styles.email_phone_label}>Ramkot, Kathmandu</span>
        </div>
      </div>
    </div>
  );
};
