/* eslint-disable no-useless-constructor */
import React from "react";
import "./FruitModal.css";

import FRUITDATA from "../../fruitdata.json";

export default class FoodModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruitindex: 0,
    };
  }

  selectFruitIndex = (fruitJson) => {
    FRUITDATA.forEach((fruit, index) => {
      if (fruit.id === this.props.fruitName) {
        return index;
      }
    });
  };

  render() {
    // let newindex = this.selectFruitIndex(this.props.fruitName);
    // const fruitindex = FRUITDATA.forEach((fruit, index) => {
    //   if (fruit.id === this.props.fruitName) {
    //     console.log(index);
    //     return index;
    //   }
    // });

    // console.log(this.props.fruitName);

    return (
      <>
        <div
          className={
            this.props.toggleModalState
              ? `modalWindow modalWindowActive`
              : `modalWindow `
          }
        >
          <div className="modalText overflow-y-auto">
            <div className="imgHolder">
              <img
                src={`../../Images/${this.props.fruitName}.jpg`}
                alt={this.props.fruitName}
                className="imgSrc-foodCard"
              />
            </div>
            <br />
            <h2 className="primary">
              {this.props.fruitName.toString().toUpperCase()}
            </h2>

            {/* //// For some reason, cant access JSON here. So i had to pass it in as a prop, all the way from App.js */}
            {/* Fruit Descriptions */}
            {/* <p>{newindex}</p> */}
            {/* <p>{console.log({FRUITDATA[{ newindex }]["feel"]})}</p> */}
            {/* <p>{FRUITDATA[this.newindex].id}</p> */}
            {/* <p>{console.log({FRUITDATA[{ newindex }]})}</p> */}
            {/* <p className="secondary">{FRUITDATA[0].visual}</p> */}
            {/* <p className="secondary">{FRUITDATA[{ newindex }].visual}</p> */}

            <div className="paddingFix">
              <p className="miniHeader">Visual Cues</p>
              <p className="secondary">{this.props.fruitVisual}</p>
              <br />
              <p className="miniHeader">Textural Cues</p>
              <p className="secondary">{this.props.fruitFeel}</p>
            </div>

            <button
              onClick={this.props.toggleModalAction}
              className="btn-close"
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {/* <div className="overlay" onClick={this.props.toggleModalAction}></div> */}
        </div>
        <div
          className={this.props.toggleModalState ? `overlay` : ` `}
          onClick={this.props.toggleModalAction}
        ></div>
      </>
    );
  }
}
