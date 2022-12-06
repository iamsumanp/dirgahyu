import styles from "../styles/component.module.css";
import DataTable from "react-data-table-component";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { GetServerSideProps } from "next";
// import "../styles/customstyling.css";

interface Ivolunteers {
  id: number;
  name: string;
  bloodType: string;
  rhType: string;
  contactNumber: string;
  // i?: any;
}

// interface IvolunteerListData {
//   id: number;
//   name: string;
//   bloodType: string;
//   rhType: string;
//   contactNumber: string;
// }
// [];

const columns = [
  // { name: "S.N", selector: (row: Ivolunteers, i: any) => i + 1 }, //TODO: check if i has alternative type other than any
  { name: "S.N", selector: (row: Ivolunteers) => row.id },
  { name: "Name", selector: (row: Ivolunteers) => row.name },
  { name: "Blood Type", selector: (row: Ivolunteers) => row.bloodType },
  { name: "Rh Type", selector: (row: Ivolunteers) => row.rhType },
  {
    name: "Contact Number",
    selector: (row: Ivolunteers) => row.contactNumber,
    right: true,
  },
];

export default function VolunteerList({ volunteerListData }: any) {
  const customStyles = {
    rows: {
      style: {
        fontWeight: "bold",
        fontSize: "1rem",
      },
    },
    headCells: {
      style: {
        fontWeight: "bolder",
        fontSize: "1.2rem",
      },
    },
  };

  //! fix the type from any to array of objects
  const [userdata, setUserData] = useState([]); //? check this

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setUserData(volunteerListData), []);
  return (
    <div className={styles.volunteer_list_container}>
      <span className={styles.volunteer_label}>Volunteers</span>

      <DataTable
        columns={columns}
        data={userdata}
        pagination
        customStyles={customStyles}
        responsive={true}
        highlightOnHover={true}
        paginationRowsPerPageOptions={[5, 10]}
      ></DataTable>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("http://localhost:4000/userData");

  const userData = await response.json();

  // const { data } = await axios.get(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );

  // console.log(userData1);
  // console.log("hello");
  return {
    props: {
      volunteerListData: userData,
    },
  };
};
