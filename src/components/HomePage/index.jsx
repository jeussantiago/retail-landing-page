import React from "react";
import styles from "./homepage.module.css";
import classnames from "classnames";

import Intro from "./Intro";
import BrandStory from "./BrandStory";
import SpringFashion from "./springFashion";
import FeaturedCategories from "./FeaturedCategories";
import MoreInfo from "./MoreInfo";
import Footer from "./Footer";


export default function HomePage() {
  return (
    <div id="Home">
      <div className={classnames(styles.pageContainer, "container-md")}>
        <Intro />
        <BrandStory />
        <SpringFashion />
        <FeaturedCategories />
        <MoreInfo />
        <Footer />
      </div>
    </div>
  )
}