import React from "react";
import StripeCheckout from "react-stripe-checkout";

import Logo from "../../assets/images/logo.svg";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GzcBmHTuvMnz3FynUjOiSGnABGsuUxuOIjLyCtEVoPrbOuV0sgVJwib3uxYPbXRuRKjDjYcr8j5erI0j0steOwi00V32P92SI";
  const onToken = (token) => {
    console.log(token);
    alert("Payment succesful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crwn Clothing"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
