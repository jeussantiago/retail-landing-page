import React, { Component } from "react";
import styles from "./dropdown.module.css";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

class BabyDropdown extends Component {
  state = {
    visibleStyle: { opacity: 1 }
  }

  //handle clicking outside component - remove component
  handleClickOutside = () => {
    // this.setState({ visibleStyle: { opacity: 0 } });
    this.props.deselectDropdown()
  }

  render() {
    return (
      <div className="d-flex justify-content-center" style={this.state.visibleStyle}>
        <div className={classnames(styles.dropContainer, "container")}>
          <div className="row">
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <div className={styles.dropCatMargin}>
                  <li className={styles.dropList}><a className={classnames(styles.dropLink, styles.dropLinkBold)} href="Home">New Arrivals</a></li>
                  <li className={styles.dropList}><a className={classnames(styles.dropLink, styles.dropLinkBold)} href="Home">Limited-Time Offers</a></li>
                  <li className={styles.dropList}><a className={classnames(styles.dropLink, styles.dropLinkBold)} href="Home">Sale</a></li>
                  <li className={styles.dropList}><a className={classnames(styles.dropLink, styles.dropLinkBold)} href="Home">Blog</a></li>
                </div>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Toddler (12M - 4Y)</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Dresses</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Outwear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Tops</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Pants</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Pajamas</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Socks</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Newborn (0 - 12M)</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Bodysuits</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">One-Pieces</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Socks</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Accessories</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Gloves</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Hats</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Scarves</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(BabyDropdown);