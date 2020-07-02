import React from "react";

import * as styles from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <styles.CartItemContainer>
    <styles.ImgContainer src={imageUrl} alt="item" />
    <styles.ItemDetailsContainer>
      <styles.NameContainer as="span">{name}</styles.NameContainer>
      <styles.PriceContainer as="span">
        {quantity} x ${price}
      </styles.PriceContainer>
    </styles.ItemDetailsContainer>
  </styles.CartItemContainer>
);

export default CartItem;
