import React from "react";
import styles from "./moreInfo.module.css";
import classnames from "classnames";

export default function MoreInfo() {
  return (
    <div>
      <div className={classnames(styles.infoContainer, "container")}>
        <div className="row">

          <div className={classnames(styles.infoCol, "col-md-4")}>
            <button className={styles.infoButton}>
              <div>
                <span>
                  <i class="fa fa-truck fa-flip-horizontal fa-2x"></i>
                </span>
                <p className={styles.infoButtonText}>Free Shipping + Returns</p>
                <p className={classnames(styles.infoButtonText, styles.infoButtonDetails)}>Details</p>
              </div>
            </button>
          </div>

          <div className={classnames(styles.infoCol, "col-md-4")}>
            <button className={styles.infoButton}>
              <div>
                <span>
                  <i class="fa fa-tablet fa-2x"></i>
                </span>
                <p className={styles.infoButtonText}>Download the app!</p>
                <p className={classnames(styles.infoButtonText, styles.infoButtonDetails)}>Learn More</p>
              </div>
            </button>
          </div>

          <div className={classnames(styles.infoCol, "col-md-4")}>
            <button className={styles.infoButton}>
              <div>
                <span>
                  <i class="fa fa-gift fa-2x"></i>
                </span>
                <p className={styles.infoButtonText}>Get Special Offers + More</p>
                <p className={classnames(styles.infoButtonText, styles.infoButtonDetails)}>Join Now</p>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}