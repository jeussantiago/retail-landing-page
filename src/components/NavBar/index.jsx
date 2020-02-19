import React, { Component } from "react";
import styles from "./navbar.module.css";
import classnames from "classnames";

import WomenDropdown from "./NavBarDropdowns/womenDropdown";
import MenDropdown from "./NavBarDropdowns/menDropdown";
import KidsDropdown from "./NavBarDropdowns/kidsDropdown";
import BabyDropdown from "./NavBarDropdowns/babyDropdown";
import NewDropdown from "./NavBarDropdowns/newDropdown";
import SaleDropdown from "./NavBarDropdowns/saleDropdown";
import StyleGuideDropdown from "./NavBarDropdowns/styleGuideDropdown";


import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';


export default class NavBar extends Component {
  state = {
    dropDownCategory: "",
    style: { opacity: 0 }
  }

  //sets the current category
  onClick = (cat) => {
    this.setState({ dropDownCategory: cat });
    console.log("dropCat:", this.state.dropDownCategory)
  }

  deselectDropdown = () => {
    this.setState({ dropDownCategory: "" });
  }


  dropdown = () => {
    switch (this.state.dropDownCategory) {
      case "WOMEN":
        return <WomenDropdown deselectDropdown={this.deselectDropdown} />;
      case "MEN":
        return <MenDropdown deselectDropdown={this.deselectDropdown} />;
      case "KIDS":
        return <KidsDropdown deselectDropdown={this.deselectDropdown} />;
      case "BABY":
        return <BabyDropdown deselectDropdown={this.deselectDropdown} />;
      case "NEW":
        return <NewDropdown deselectDropdown={this.deselectDropdown} />;
      case "SALE":
        return <SaleDropdown deselectDropdown={this.deselectDropdown} />;
      case "STYLEGUIDE":
        return <StyleGuideDropdown deselectDropdown={this.deselectDropdown} />
      default:
        break;
    }


  }

  render() {
    return (
      <div>
        <Navbar expand="lg" className={classnames(styles.navContainer, "container")}>
          <div className={classnames(styles.navBrandContainer)}>
            <h1 className={styles.navBrand}>NotRealStore</h1>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item", styles.navMainLinkContainerBorderRight)}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("WOMEN")}>Women</button>
              </div>
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item", styles.navMainLinkContainerBorderRight)}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("MEN")}>Men</button>
              </div>
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item", styles.navMainLinkContainerBorderRight)}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("KIDS")}>Kids</button>
              </div>
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item", styles.navMainLinkContainerBorderRight)}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("BABY")}>Baby</button>
              </div>
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item", styles.navMainLinkContainerBorderRight)}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("NEW")}>New</button>
              </div>
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item", styles.navMainLinkContainerBorderRight)}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("SALE")}>Sale</button>
              </div>
              <div href="#home" className={classnames(styles.navMainLinkContainer, "nav-item")}>
                <button className={styles.navMainLinkButton} onClick={() => this.onClick("STYLEGUIDE")}>Style Guide</button>
              </div>
            </Nav>
            <Form inline className={classnames("form-inline")}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <button className={styles.navSearchButton}>
                <i className={classnames("fa fa-search fa-lg")}></i>
              </button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        {this.dropdown()}
      </div>
    );
  }
}