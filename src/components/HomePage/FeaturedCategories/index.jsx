import React, { Component } from "react";
import styles from "./featured_categories.module.css";
import classnames from "classnames";
// import { Button, ButtonGroup } from 'react-bootstrap';
import IMGS from "./imgLocations";

export default class FeaturedCategories extends Component {
  state = {
    current_selection: "WOMEN"
  }

  //update the current active button
  updateSelection = (currentSelection) => { this.setState({ current_selection: currentSelection }) }

  //style each button based on active or not
  buttonStyle = (buttonSelection) => {
    if (this.state.current_selection === buttonSelection) {
      //active button
      return {
        borderBottom: "6px solid rgb(95, 108, 228)",
        color: "#000"
      }
    } else {
      //non active buttons
      return {
        // borderBottom: "2px solid rgb(180, 180, 180);",
        color: "rgb(180, 180, 180)"
      }
    }
  }

  //renders the feauture categories for each gender type
  categories = () => {
    //the current active button selection 
    let curr_data = IMGS[`${this.state.current_selection}`];
    //iterate through the categories
    return (
      <div className={classnames(styles.featureContainer, "row")}>
        {Object.keys(curr_data).map((cat) => {
          //create a link for each category
          let cat_link = curr_data[`${cat}`];
          //create a style for each box to fill in background image
          let cat_style = {
            backgroundImage: `url(${cat_link})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center"
          }
          //render each category box
          return (

            <button className={classnames(styles.featureBox, "col-md-3")} style={cat_style}>
              <h2 className={classnames(styles.featureBoxText)}>{cat}</h2>
            </button>

          )
        })}
      </div>
    )
  }


  render() {
    return (

      <div>
        <h1 className={styles.FeaturedCategoriesHeader}>
          Featured Categories
        </h1>
        <div className={styles.genderCategorySelection}>
          <div className="row">
            <button className={classnames(styles.genderSelectButton, "col-sm-3")} style={this.buttonStyle("MEN")} onClick={() => this.updateSelection("MEN")}>Men</button>
            <button className={classnames(styles.genderSelectButton, "col-sm-3")} style={this.buttonStyle("WOMEN")} onClick={() => this.updateSelection("WOMEN")}>Women</button>
            <button className={classnames(styles.genderSelectButton, "col-sm-3")} style={this.buttonStyle("KIDS")} onClick={() => this.updateSelection("KIDS")}>Kids</button>
            <button className={classnames(styles.genderSelectButton, "col-sm-3")} style={this.buttonStyle("BABY")} onClick={() => this.updateSelection("BABY")}>Baby</button>
          </div>
          {this.categories()}
        </div >
      </div >

    )
  }
}