import React, { Component } from "react";
import styles from "./dropdown.module.css";
import classnames from "classnames";
import onClickOutside from "react-onclickoutside";

class StyleGuideDropdown extends Component {
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
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Fashion Trends</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Women's Trend Report</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Outfit Generator</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Street Style</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Under $100</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Beauty Tips</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Get the Look</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Grooming Tips</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Top 5 Looks</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Styling Services</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Tailoring</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Beauty Services</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Styling</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className={styles.dropUnorderList}>
                <li className={classnames(styles.dropList)}><a className={styles.dropCatHeader} href="Home">Looks</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Women's Looks</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Men's Looks</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Kid's Looks</a></li>
                <li className={styles.dropList}><a className={styles.dropLink} href="Home">Baby Looks</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default onClickOutside(StyleGuideDropdown);