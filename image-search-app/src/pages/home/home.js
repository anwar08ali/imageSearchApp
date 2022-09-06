import React from "react";

import ImageSearch from "../../components/ImageSearch";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <>
      <header>
        <div className={styles.heading}>Image Search App</div>
      </header>
      <ImageSearch />
    </>
  );
};

export default Home;
