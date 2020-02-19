import React, { Component } from "react";
import styles from "./intro.module.css";
import classnames from "classnames";
import { Carousel } from 'react-bootstrap';

const first_img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/paris-fashion-week-pfw-street-style-ss20-day-2-by-tyler-joe-013-1569691595.jpg";
const sec_img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pfw-ss19-day-9-tyler-joe-26-1538674471.jpg";
const third_img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pfw-ss19-day-6-tyler-joe-61-1538339628.jpg";




export default class Intro extends Component {

  state = {
    index: 1,
    direction: null
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  Icon = (direction) => {
    if (direction === "PREV") {
      return (
        <span className={classnames(styles.introCarouselChevron, styles.introCarouselChevronLeft)}>
          <i className="fa fa-angle-left fa-4x"></i>
        </span>
      )
    } else {
      return (
        <span className={classnames(styles.introCarouselChevron, styles.introCarouselChevronRight)}>
          <i className="fa fa-angle-right fa-4x"></i>
        </span>
      )
    }

  }

  render() {
    return (
      <div id="Intro">
        <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect} className={classnames(styles.introCarousel)} prevIcon={this.Icon("PREV")} nextIcon={this.Icon("NEXT")}>

          <Carousel.Item className={classnames(styles.introCarouselItem)}>
            <div className="row">
              <div className={classnames(styles.introCarouselImgContainer, "col-md-9")}>
                <img className={classnames(styles.introCarouselImg)} src={first_img} alt="First slide" />
              </div>
              <div className={classnames(styles.introCarouselContentContainer, "col-lg-3")}>
                <div className={styles.introCarouselContentBannerContainer}>
                  <h3 className={styles.introCarouselContentBanner}>LIMITED-TIME OFFER</h3>
                </div>
                <h2 className={styles.introCarouselHeader}>THIS MONTH ONLY: UP TO 40% OFF SELECT STYLES EACH WEEK</h2>
                <div className={styles.introCarouselClothesContainer}>
                  <button className={styles.introCarouselClothesGender}>WOMEN</button>
                  <button className={styles.introCarouselClothesGender}>MEN</button>
                  <button className={styles.introCarouselClothesGender}>KIDS</button>
                </div>
                <div className={styles.introCarouselImgOutfitContainer}>
                  <h2 className={styles.introCarouselImgOutfitHeader}>Image Outfit:</h2>
                  <p className={styles.introCarouselImgOutfitName}>Corset Peacoat</p>
                  <div className={styles.introCarouselImgOutfitCostContainer}>
                    <p className={styles.introCarouselImgOutfitCostReduced}>$65.95</p>
                    <p className={styles.introCarouselImgOutfitCostOriginal}>$99.95</p>
                  </div>
                  <p className={styles.introCarouselImgOutfitDealDuration}>Online & In Stores</p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className={classnames(styles.introCarouselItem)}>
            <div className="row">
              <div className={classnames(styles.introCarouselImgContainer, "col-md-9")}>
                <img className={classnames(styles.introCarouselImg)} src={sec_img} alt="Second slide" />
              </div>
              <div className={classnames(styles.introCarouselContentContainer, "col-lg-3")}>
                <div className={styles.introCarouselContentBannerContainer}>
                  <h3 className={styles.introCarouselContentBanner}>LIMITED-TIME OFFER</h3>
                </div>
                <h2 className={styles.introCarouselHeader}>THIS MONTH ONLY: UP TO 40% OFF SELECT STYLES EACH WEEK</h2>
                <div className={styles.introCarouselClothesContainer}>
                  <button className={styles.introCarouselClothesGender}>WOMEN</button>
                  <button className={styles.introCarouselClothesGender}>MEN</button>
                  <button className={styles.introCarouselClothesGender}>KIDS</button>
                </div>
                <div className={styles.introCarouselImgOutfitContainer}>
                  <h2 className={styles.introCarouselImgOutfitHeader}>Image Outfit:</h2>
                  <p className={styles.introCarouselImgOutfitName}>Long Denim Shirt</p>
                  <p className={styles.introCarouselImgOutfitCost}>$29.99</p>

                  <p className={styles.introCarouselImgOutfitName}>High Ankle Jeans</p>

                  <p className={styles.introCarouselImgOutfitCost}>$29.99</p>

                  <p className={styles.introCarouselImgOutfitDealDuration}>Online & In Stores</p>
                </div>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className={classnames(styles.introCarouselItem)}>
            <div className="row">
              <div className={classnames(styles.introCarouselImgContainer, "col-md-9")}>
                <img className={classnames(styles.introCarouselImg)} src={third_img} alt="First slide" />
              </div>
              <div className={classnames(styles.introCarouselContentContainer, "col-lg-3")}>
                <div className={styles.introCarouselContentBannerContainer}>
                  <h3 className={classnames(styles.introCarouselContentBanner, styles.introCarouselContentBannerBackground)}>TREND HELP</h3>
                </div>
                <h2 className={styles.introCarouselHeader}>STAY UP TO DATE</h2>
                <p className={styles.introCarouselSubHeader}>See how we can elevate your style to match modern trends</p>
                <div className={styles.introCarouselClothesContainer}>
                  <button className={styles.introCarouselClothesGender}>WOMEN</button>
                  <button className={styles.introCarouselClothesGender}>MEN</button>
                  <button className={styles.introCarouselClothesGender}>KIDS</button>
                </div>
              </div>
            </div>
          </Carousel.Item>



        </Carousel>




      </div>
    );
  }
}