import React from "react";
import "../App.css";

import FoodCard from "../Components/FoodCard/FoodCard.js";
// import FRUITDATA from "../fruitdata.json";

export default class CatalogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addedList: [],
      addedFruit: "",
    };
  }

  addToAddedList = (fruit) => {
    this.props.addItemToList(fruit);
  };

  fullFruitsMenuSorted = this.props.fruitList.map((fruit) => {
    return (
      <FoodCard
        fruitName={fruit[0]}
        fruitIndex={fruit[1]}
        fruitVisual={fruit[2]}
        fruitFeel={fruit[3]}
        addItemButton={this.addToAddedList}
      />
    );
  });

  // fullFruitsMenuSorted = this.fullFruitsMenu.map((fruit) => {
  //   return <FoodCard fruitName={fruit} />;
  // });

  // Q: Originally I sorted here. But cant make it work..
  // fullFruitsMenuSorted = this.fullFruitsMenu.sort().map((fruit) => {
  //   return <FoodCard fruitName={fruit} />;
  // });

  render() {
    return (
      <>
        <div id="catalogWrapper">
          {/* Can change the props.searchMode based on what kind of sorting I want. */}
          {/* {this.props.searchMode === "SORTED" && this.fullFruitsMenuSorted} */}
          {this.fullFruitsMenuSorted}
          {/* <FoodCard fruitName={this.props.fruit} />
        <FoodCard fruitName={this.props.fruit} /> */}
        </div>
      </>
    );
  }
}
