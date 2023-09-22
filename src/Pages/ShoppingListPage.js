import React from "react";
import "../App.css";

import FoodCardAdded from "../Components/FoodCardAdded/FoodCardAdded.js";

export default class ShoppingListPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anyItems: false,
    };

    if (this.props.addedItems.length > 0) {
      console.log("There are items!");
      this.state = {
        anyItems: true,
      };
    } else {
      console.log("no items");
      this.state = {
        anyItems: false,
      };
    }

    // 1. note that this is re-setting the set. which cannot be done via componentDidMount
  }

  // 2. Setting the state doesnt work because the constructor will override it on mount.
  // if (this.props.addedItems.length > 0) {
  //   console.log("There are items!");
  //   this.setState({
  //     anyItems: true,
  //   });
  // } else {
  //   console.log("no items");
  //   this.setState({
  //     anyItems: false,
  //   });
  // }

  addedFruitsMenu = this.props.addedItems.map((fruit) => {
    return (
      <FoodCardAdded
        fruitName={fruit[0]}
        fruitIndex={fruit[1]}
        fruitVisual={fruit[2]}
        fruitFeel={fruit[3]}
      />
    );
  });

  // addedFruitsMenu = this.props.addedItems.map((fruit) => {
  //   console.log("SHOPPINGLIST CHECK: ", fruit[0]);
  //   console.log("localStorage CHECK: ", localStorage.getItem(fruit[0]));

  //   if (localStorage.getItem(fruit[0]) == true) {
  //     console.log("entered loop for: ", fruit[0]);
  //     return (
  //       <FoodCardAdded
  //         fruitName={fruit[0]}
  //         fruitIndex={fruit[1]}
  //         fruitVisual={fruit[2]}
  //         fruitFeel={fruit[3]}
  //       />
  //     );
  //   } else {
  //     return null;
  //   }
  // });

  // addedFruitsMenu = this.props.addedItems.map((fruit) => {
  //   return (
  //     <FoodCardAdded
  //       fruitName={fruit[0]}
  //       fruitIndex={fruit[1]}
  //       fruitVisual={fruit[2]}
  //       fruitFeel={fruit[3]}
  //     />
  //   );
  // });

  render() {
    const emptyMsg = (
      <div className="testing">
        <h1 className="errorText">No Saved Fruits.</h1>
      </div>
    );

    // console.log(this.props.addedItems);

    return (
      <>
        {/* {this.state.anyItems && <h1 className="testing">Hello</h1>} */}
        <div id="catalogWrapper">
          {this.addedFruitsMenu}
          {/* {this.state.anyItems === false && emptyMsg} */}
          {this.state.anyItems === false ? emptyMsg : null}
        </div>
      </>
    );
  }
}
