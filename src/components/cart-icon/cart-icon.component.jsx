import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
