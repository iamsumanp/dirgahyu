import React, { useState } from "react";
import styles from "../styles/home.module.css";
import Image from "next/image";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";
import { GiPlainCircle } from "react-icons/gi";
import { AiOutlineEnter } from "react-icons/ai";
import { bloodGroup } from "../data/data";
import { rhesusD } from "../data/data";
import { locations } from "../data/data";
import { facilityData } from "../data/data";

export default function Home() {
  const [bGroup, setBGroup] = useState("A");
  const [rhesus, setRhesus] = useState("+ve");
  const [location, setLocation] = useState("Dhulikhel");

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("works for now");
    console.log(bGroup);
    console.log(rhesus);
  };

  return (
    <div className={styles.container_parent}>
      <div className={styles.containerBg}>
        <div className={styles.contentBg}>
          <div className={styles.banner_title}>
            <h1 className={styles.title_dirgahyu}>
              We are <span className={styles.span_dirgahyu}>DIRGAHYU...</span>
            </h1>
            <p className={styles.p_dirgahyu}>A pint can save many lives</p>
            <div className={styles.bannerBtn}>
              <button className={styles.req_donate_btn}>Request Blood</button>
              <button className={styles.req_donate_btn}>Donate Blood</button>
            </div>
            <div className={styles.bannerlinks_bg}>
              {/* <Link href="#" className={styles.nv_link}> */}
              <div className={styles.blood_bank_req_link}>
                <TiLocationArrow className={styles.icon} size={20} />
                {/* <span>1</span> */}
                <span className={styles.blood_bank_req_label}>
                  Blood Banks Near Me
                </span>
              </div>
              {/* </Link> */}
              {/* <Link href="#" className={styles.nv_link}> */}
              <div className={styles.blood_bank_req_link}>
                <GiPlainCircle
                  className={styles.icon}
                  size={10}
                  style={{ marginRight: "0.4rem" }}
                />
                <span className={styles.blood_bank_req_label}>
                  Live Request
                </span>
              </div>
              {/* </Link> */}
            </div>
            <div className={styles.search_content}>
              <span className={styles.search_label}>Search Blood</span>
              <form onSubmit={submitHandler}>
                <div className={styles.options_search_content}>
                  <div className={styles.options_content}>
                    <select
                      name="bloodGroup"
                      value={bGroup}
                      onChange={(e) => setBGroup(e.target.value)}
                      className={styles.select_comp}
                    >
                      {bloodGroup.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      name="rhesus"
                      value={rhesus}
                      onChange={(e) => setRhesus(e.target.value)}
                      className={styles.select_comp}
                    >
                      {rhesusD.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <select
                      name="locations"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className={styles.select_comp}
                    >
                      {locations.map((option) => (
                        <option value={option} key={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button type="submit" className={styles.search_btn}>
                    Search <AiOutlineEnter size={10} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.clipPathBg}>
          <Image
            src="https://res.cloudinary.com/hire-station/image/upload/v1668150541/dirgahyu/donate_s0xjm2.jpg"
            height={1000}
            width={1000}
            alt="carousel"
            object-fit="cover"
            // priority
            className={styles.dirgahyuImg}
          ></Image>
        </div>
      </div>
      <div className={styles.facilities_container_bg}>
        <div className={styles.facilites_section}>
          {/* <div className={styles.facility_content}>
            <span>image</span>
            <div className={styles.name_desc}>
              <span>Grande Hospital</span>
              <span>Tokha,Kathmandu</span>
            </div>
            <div className={styles.name_desc}>
              <span>Blood Types</span>
              <div className={styles.blood_types}>Tokha,Kathmandu</div>
            </div>
          </div> */}
          {facilityData.map((data) => (
            <div className={styles.facility_content} key={data.id}>
              <Image src={data.image} height={20} width={20} alt={data.name} />
              <div className={styles.name_desc}>
                <span>{data.name}</span>
                <span>{data.address}</span>
              </div>
              <div className={styles.name_desc}>
                <span>Blood Types</span>
                <div className={styles.blood_types}>
                  {data.bloodtypes.map((data) => (
                    <div key={data}>
                      <span>{data}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.availability_section}>
          <span>check availability</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            soluta inventore
          </span>
        </div>
      </div>
    </div>
  );
}
