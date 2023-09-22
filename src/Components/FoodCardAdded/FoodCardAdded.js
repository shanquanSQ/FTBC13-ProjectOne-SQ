import React from "react";
import "../../App.css";
import "./FoodCardAdded.css";

import FoodModal from "../FoodModal/FoodModal.js";

export default class FoodCardAdded extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalState: false,

      buttonText: "ADD",
    };
  }

  //Function for Child: To toggle the pop-up modal window
  openModal = () => {
    this.setState({
      modalState: !this.state.modalState,
    });
  };

  handleClick = () => {
    this.props.addItemButton(this.props.fruitIndex);
    this.setState({
      buttonText: "ADDED!",
      isClicked: true,
    });
    // console.log("FoodCard handleClick - added index: ", this.props.fruitIndex);
  };

  render() {
    // Locks the scroll for document.body if the this.state.modalState: true
    // Not sure what is classList for though.
    //Dont actually need this because the modalwindow.css has sth similar
    if (this.state.modalState === true) {
      document.body.classList.add("lockedScroll");
    } else {
      document.body.classList.remove("lockedScroll");
    }

    return (
      <>
        {/* Child Component. Pop-Up on click */}
        <FoodModal
          toggleModalState={this.state.modalState}
          toggleModalAction={this.openModal}
          fruitName={this.props.fruitName}
          fruitIndex={this.props.fruitIndex}
          fruitVisual={this.props.fruitVisual}
          fruitFeel={this.props.fruitFeel}
        />

        {/*Q  why cant i apply the onClick at the parent, if i used map? */}
        <div className="foodCardWrapper">
          <div className="foodCard" onClick={this.openModal}>
            <div className="foodCardImgWrapper">
              <img
                src={`../../Images/${this.props.fruitName}.jpg`}
                alt={this.props.fruitName}
                className="foodCardImg"
              />
            </div>

            {/* {this.state.modalState.toString()} */}
            {/* <button onClick={this.openModal}>{this.props.fruitName}</button> */}
            <div className="foodCardText">
              <h2>{this.props.fruitName.toUpperCase()}</h2>
              <p className="secondary">In Season</p>
            </div>
          </div>
        </div>
        {/* 
        <div className="addbuttonalignment">
          <button
            className="btn btn-outline btn-success active:btn-warning btn-xs addButton"
            onClick={this.handleClick}
          >
            Add
          </button>
        </div> */}
      </>
    );
  }
}
