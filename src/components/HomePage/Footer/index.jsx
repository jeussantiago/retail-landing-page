import React from "react";
import styles from "./footer.module.css";
import classnames from "classnames";

export default function Footer() {
  return (
    <footer className={classnames(styles.footerSection)} id="Footer">
      <div className="row">

        <div className={classnames(styles.footerCol, "col-md-3")}>
          <div className={styles.footerColTitleContainer}>
            <h1 className={styles.footerColTitle}>ABOUT US</h1>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Stores & Events</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Careers</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Site Feedback</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Site Map</p>
          </div>
        </div>

        <div className={classnames(styles.footerCol, "col-md-2")}>
          <div className={styles.footerColTitleContainer}>
            <h1 className={styles.footerColTitle}>HELP</h1>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>FAQ</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Shipping</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Returns</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Order Status</p>
          </div>
          <div className={styles.footerColItemContainer}>
            <p className={styles.footerColItemLink}>Contact Us</p>
          </div>
        </div>

        <div className={classnames(styles.footerCol, "col-md-3")}>
          <div className={styles.footerColTitleContainer}>
            <h1 className={styles.footerColTitle}>FOLLOW US</h1>
          </div>
          <div className={classnames(styles.footerFollowRow, "row")}>
            <div className={classnames(styles.footerFollowCol, "col-4")}>
              <div className={classnames(styles.footerFollowIconContainer, "d-flex justify-content-center align-items-center")}>
                <i className="fa fa-facebook-square fa-2x"></i>
              </div>
            </div>
            <div className={classnames(styles.footerFollowCol, "col-4")}>
              <div className={classnames(styles.footerFollowIconContainer, "d-flex justify-content-center align-items-center")}>
                <i className="fa fa-instagram fa-2x"></i>
              </div>
            </div>
            <div className={classnames(styles.footerFollowCol, "col-4")}>
              <div className={classnames(styles.footerFollowIconContainer, "d-flex justify-content-center align-items-center")}>
                <i className="fa fa-twitter-square fa-2x"></i>
              </div>
            </div>
            <div className={classnames(styles.footerFollowCol, "col-4")}>
              <div className={classnames(styles.footerFollowIconContainer, "d-flex justify-content-center align-items-center")}>
                <i className="fa fa-youtube-square fa-2x"></i>
              </div>
            </div>
            <div className={classnames(styles.footerFollowCol, "col-4")}>
              <div className={classnames(styles.footerFollowIconContainer, "d-flex justify-content-center align-items-center")}>
                <i className="fa fa-pinterest-square fa-2x"></i>
              </div>
            </div>
            <div className={classnames(styles.footerFollowCol, "col-4")}>
              <div className={classnames(styles.footerFollowIconContainer, "d-flex justify-content-center align-items-center")}>
                <i className="fa fa-snapchat-square fa-2x"></i>
              </div>
            </div>
          </div>
        </div>

        <div className={classnames(styles.footerCol, "col-md-4")}>
          <div className={styles.footerColTitleContainer}>
            <h1 className={styles.footerColTitle}>BECOME A MEMBER</h1>
          </div>
          <div>
            <p className={styles.footerSubScribePara}>
              Subscribe to hear upcoming deals and news about our latest partnerships and collections.
            </p>
          </div>
          <form className={styles.footerForm}>
            <input type="text" id="fname" name="fname" placeholder="Enter Email"></input>
            <input type="submit" value="SIGN UP"></input>
          </form>
        </div>

      </div>
    </footer>
  )
}