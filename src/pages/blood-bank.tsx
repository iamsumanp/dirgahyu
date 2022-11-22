import { useState } from "react";
import styles from "../styles/component.module.css";
import homeStyles from "../styles/home.module.css";
import { BiSearch } from "react-icons/bi";
import { bloodBanks } from "../data/data";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import { filterData } from "../data/data";

export default function Bloodbank(): JSX.Element {
  const [blood_bank_keyword, setBlood_bank_keyword] = useState<string | number>(
    " "
  );
  return (
    <div className={styles.blood_bank_bg}>
      <div className={styles.blood_bank_container}>
        <div className={styles.search_bg}>
          <div className={styles.search_content}>
            <input
              type="text"
              value={blood_bank_keyword}
              className={styles.input_blood_bank}
              onChange={(e) => setBlood_bank_keyword(e.target.value)}
            />
            <div className={styles.search_btn}>
              <BiSearch size={40} className={styles.search_icon} />
            </div>
          </div>
          <span className={styles.adv_search_label}>Advanced Search</span>
        </div>
        <div className={styles.filter_blood_bank_bg}>
          <div className={styles.filter_content}>
            <span style={{ fontSize: "1.5rem" }}>Filters</span>
            <div className={styles.location_content}>
              <span className={styles.filter_label}>Location</span>

              <div className={styles.options_data}>
                {filterData.locations &&
                  filterData.locations.map((data, index) => (
                    <div key={index} className={styles.input_label_content}>
                      <input
                        value={data}
                        type="checkbox"
                        className={styles.checkbox_input}
                      />
                      <span>{data}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.blood_content}>
              <span className={styles.filter_label}>Blood Type</span>
              <div className={styles.options_data}>
                {filterData &&
                  filterData.bloodGroup.map((data, index) => (
                    <div key={index} className={styles.input_label_content}>
                      <input
                        value={data}
                        type="checkbox"
                        className={styles.checkbox_input}
                      />
                      <span>{data}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className={styles.rh_content}>
              <span className={styles.filter_label}>Rh Type</span>
              <div className={styles.options_data}>
                {filterData &&
                  filterData.rhesusD.map((data, index) => (
                    <div key={index} className={styles.input_label_content}>
                      <input
                        value={data}
                        type="checkbox"
                        className={styles.checkbox_input}
                      />
                      <span>{data}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={styles.blood_bank_desc}>
            {bloodBanks.map((data) => (
              <div key={data.id} className={homeStyles.facility_content}>
                <div className={homeStyles.image_name_desc}>
                  <Image
                    src={data.image}
                    height={100}
                    width={100}
                    alt={data.name}
                    className={homeStyles.facility_logo}
                  />
                  <div className={homeStyles.name_desc}>
                    <span className={homeStyles.name_bloodtype_label}>
                      {data.name}
                    </span>
                    <div className={homeStyles.address_container}>
                      <MdLocationOn />
                      <span className={homeStyles.address_label}>
                        {data.address}
                      </span>
                      <FiArrowUpRight />
                    </div>
                  </div>
                </div>
                <div className={homeStyles.name_desc}>
                  <span className={homeStyles.name_bloodtype_label}>
                    Available Blood Types
                  </span>
                  <div className={homeStyles.blood_types}>
                    {data.bloodtypes.map((data) => (
                      <div key={data} className={homeStyles.blood_type_label}>
                        <span className={homeStyles.address_label}>{data}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
