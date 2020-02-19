import React, { Component } from "react";
import styles from "./dropdown.module.css";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

class MenDropdown extends Component {
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
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Shop By Occassion</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Night Out</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Wedding</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Weekend</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Work</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Clothing</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Activewear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Blazers & Sports Coats</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Denim</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Outerwear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Loungewear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Pants</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Shirts</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Shorts</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Suits</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sweaters</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sweatshirts & Hoodies</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Swimwear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Tops</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Underwear</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Shoes</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Boots</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Comfort</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Dress Shoes</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Loafers</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Oxfords</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sandals</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Slides</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Slippers</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sneakers & Athletic</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Accessories</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Bags</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Belts</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Gloves</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Hats</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Jewelry</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Scarves</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sunglasses</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Ties</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Wallets</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Watches</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(MenDropdown);