import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component.jsx";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartItemsTotal
} from "../../redux/cart/cart.selectors";

import * as styles from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <styles.CheckoutPageContainer>
    <styles.CheckoutHeaderContainer>
      <styles.HeaderBlockContainer>
        <span>Product</span>
      </styles.HeaderBlockContainer>
      <styles.HeaderBlockContainer>
        <span>Description</span>
      </styles.HeaderBlockContainer>
      <styles.HeaderBlockContainer>
        <span>Quantity</span>
      </styles.HeaderBlockContainer>
      <styles.HeaderBlockContainer>
        <span>Price</span>
      </styles.HeaderBlockContainer>
      <styles.HeaderBlockContainer>
        <span>Remove</span>
      </styles.HeaderBlockContainer>
    </styles.CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <styles.TotalContainer>
      <span>TOTAL: ${total}</span>
    </styles.TotalContainer>
    <StripeCheckoutButton price={total} />
  </styles.CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
