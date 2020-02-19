import React from "react";
import styles from "./springFashion.module.css";
import classnames from "classnames";

const womenTopIMG = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pfw-ss19-day-8-tyler-joe-12-1538489481.jpg";
const womenBottomIMG = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/lfw-fw19-day-2-tyler-joe-21-1550542192.jpg";
const menTopIMG = "https://media.gq.com/photos/5cfe6cb35a0422e41ed935b9/master/w_2784,h_1856,c_limit/Day-2-LFWM-cnigq-090619-credit-Andrew-Barber-OmniStyle18.jpg";
const menBottomIMG = "https://media.gq.com/photos/5cffbe365a04224a15d935e3/master/w_1600%2Cc_limit/Day-3-LFWM-cnigq-100619-credit-Andrew-Barber-OmniStyle8.jpg";
export default function SpringFashion() {
  return (
    <div>
      <div className={styles.springFashionWrapper}>
        <div className={classnames(styles.springFashionContainer, "container")}>
          <div className={classnames(styles.springFashionHeaderContainer, "row", "justify-content-center")}>
            <h1 className={styles.springFashionHeader}>
              Spring Fashion
          </h1>
          </div>
          <div className={classnames(styles.springFashionInnerContainer, "row")}>
            <div className={classnames(styles.springFashionColContainer, "col-md-6")}>
              <div className={classnames(styles.springFashionIMGContainer)}>
                <img src={womenTopIMG} alt="Women Spring Fashion" className={styles.springFashionIMG}></img>
              </div>
              <div className={classnames(styles.springFashionIMGContainer)}>
                <img src={womenBottomIMG} alt="Women Spring Fashion" className={styles.springFashionIMG}></img>
              </div>
              <div className={styles.springFashionCollectionLinkContainer}>
                <button className={styles.springFashionCollectionLink}>Shop Women's Collection</button>
              </div>
            </div>
            <div className={classnames(styles.springFashionColContainer, "col-md-6")}>
              <div className={classnames(styles.springFashionIMGContainer)}>
                <img src={menTopIMG} alt="Men Spring Fashion" className={styles.springFashionIMG}></img>
              </div>
              <div className={classnames(styles.springFashionIMGContainer)}>
                <img src={menBottomIMG} alt="Men Spring Fashion" className={styles.springFashionIMG}></img>
              </div>
              <div className={styles.springFashionCollectionLinkContainer}>
                <button className={styles.springFashionCollectionLink}>Shop Men's Collection</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}