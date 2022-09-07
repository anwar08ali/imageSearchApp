import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";

import ImageSearch from "../../components/ImageSearch";
import styles from "./home.module.css";

const Home = (props) => {
  return (
    <>
      <header>
        <div className={styles.heading}>Image Search App</div>
      </header>
      <ErrorBoundary>
        <ImageSearch />
      </ErrorBoundary>
    </>
  );
};

export default Home;
