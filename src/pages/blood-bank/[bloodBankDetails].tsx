import { useRouter } from "next/router";
import styles from "../../styles/component.module.css";
import Image from "next/image";
import homeStyles from "../../styles/home.module.css";
import { MdLocationOn } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";
import "../../data/data";
import { dummyAvailableBloodData } from "../../data/data";

export default function BloodBankDetails(): JSX.Element {
  const router = useRouter();
  const bloodBankDetail = router.query.bloodBankDetails;
  return (
    <div className={styles.details_container}>
      <div className={styles.label_edit_container}>
        <span className={styles.hello_label}>Hello,</span>
        <button className={styles.edit_btn}>Edit your data</button>
      </div>
      <div className={styles.blood_bank_details_container}>
        <div className={styles.blood_bank_image_label_content}>
          <Image
            src="https://res.cloudinary.com/hire-station/image/upload/v1668371592/dirgahyu/grande_logo_1_om7g34.png"
            height={100}
            width={100}
            alt="blood-bank-name"
            className={styles.facility_logo}
            style={{ marginBottom: "2rem" }}
          />
          <div className={homeStyles.name_desc}>
            <span className={homeStyles.name_bloodtype_label}>
              Grande Hospital
            </span>
            <div className={homeStyles.address_container}>
              <MdLocationOn />
              <span className={homeStyles.address_label}>Tokha,Kathmandu</span>
              <FiArrowUpRight />
            </div>
          </div>
        </div>
        <div className={styles.avl_blood_types_content}>
          <span className={styles.filter_title}>Available Blood Types</span>
          <div className={styles.avl_blood_types_data}>
            {dummyAvailableBloodData.map((data, index) => (
              <div key={index} className={styles.data_pint_content}>
                <div className={styles.blood_type_label}>
                  <span>{data.blood_type}</span>
                </div>
                <span className={styles.pint_label}>{data.pints}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
