import React, { Component } from "react";
import styles from "./dropdown.module.css";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

class SaleDropdown extends Component {
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
                  <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Shop Sale</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Women</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Men</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Kids</a></li>
                  <li className={styles.dropList}><a className={styles.dropLink} href="Home">Baby</a></li>
                </div>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Women's Sale Clothing</a></li>
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
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Men's Sale Clothing</a></li>
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
                <div className={styles.dropCatMargin}>
                  <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Women's Sale Shoes</a></li>
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
                </div>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Men's Sale Shoes</a></li>
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
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(SaleDropdown);