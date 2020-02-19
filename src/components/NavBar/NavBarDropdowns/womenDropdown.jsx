import React, { Component } from "react";
import styles from "./dropdown.module.css";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

class WomenDropdown extends Component {
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
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Prom</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Vacation</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Wedding</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Clothing</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Activewear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Dresses</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Denim</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Outerwear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Loungewear</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Pants & Leggings</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Rompers</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Shorts</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Skirts</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sweaters</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sweatshirts & Hoodies</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Swimsuits</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Tops</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Shoes</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Booties</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Boots</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Comfort</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Flats</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Heels</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Oxfords</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sandals</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Slides</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Slippers</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sneakers & Athletic</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <div className={styles.dropCatMargin}>
                  <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Handbags</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Backpacks</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Clutches & Pouches</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Satchels</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Luggae & Travel</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Tote Bags</a></li>
                </div>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Accessories</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Belts</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Hats</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Jewelry</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Scarves</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Sunglasses</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(WomenDropdown);













