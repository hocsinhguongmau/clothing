import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

import * as styles from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <styles.CollectionItemContainer>
      <styles.Image
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></styles.Image>
      <styles.CollectionFooterContainer>
        <styles.NameContainer as="span">{name}</styles.NameContainer>
        <styles.PriceContainer as="span">{price}</styles.PriceContainer>
      </styles.CollectionFooterContainer>
      <styles.CustomButtonContainer
        as={CustomButton}
        inverted
        onClick={() => addItem(item)}
      >
        Add to cart
      </styles.CustomButtonContainer>
    </styles.CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
