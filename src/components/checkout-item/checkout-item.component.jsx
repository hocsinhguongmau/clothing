import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.actions";

import * as styles from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <styles.CheckoutItemContainer>
      <styles.ImageContainer>
        <styles.Image src={imageUrl} alt="item" />
      </styles.ImageContainer>
      <styles.NameContainer as="span">{name}</styles.NameContainer>
      <styles.QuantityContainer as="span">
        <styles.ArrowContainer onClick={() => removeItem(cartItem)}>
          &#10094;
        </styles.ArrowContainer>
        <styles.ValueContainer as="span">{quantity}</styles.ValueContainer>
        <styles.ArrowContainer onClick={() => addItem(cartItem)}>
          &#10095;
        </styles.ArrowContainer>
      </styles.QuantityContainer>
      <styles.PriceContainer as="span">{price}</styles.PriceContainer>
      <styles.RemoveButton onClick={() => clearItem(cartItem)}>
        &#10005;
      </styles.RemoveButton>
    </styles.CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
