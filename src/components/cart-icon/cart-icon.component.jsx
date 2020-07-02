import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors.js";

import * as styles from "./cart-icon.styles";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <styles.CartIconContainer onClick={toggleCartHidden}>
      <styles.ShoppingIconContainer
        as={ShoppingIcon}
        className="shopping-icon"
      />
      <styles.ItemCountContainer as="span">
        {itemCount}
      </styles.ItemCountContainer>
    </styles.CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
