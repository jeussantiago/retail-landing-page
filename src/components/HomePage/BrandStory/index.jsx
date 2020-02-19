import React from "react";
import styles from "./BrandStory.module.css";
import classnames from "classnames";



export default function BrandStory() {
  return (
    <div>
      <div className={classnames(styles.brandContainer, "container")}>
        <div className="row">
          <div className={classnames(styles.brandCol, "col-md-6")}>
            <h1 className={styles.brandHeader}>GET TO KNOW US</h1>
          </div>
          <div className={classnames(styles.brandCol, "col-md-6")}>
            <div>
              <p className={styles.brandSubHeader}>
                See what drives us to offer our customers the best in quality and style.
              </p>
              <div className={classnames(styles.brandButtonContainer, "row", "justify-content-start")}>
                <button className={classnames(styles.brandButton)}>
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
