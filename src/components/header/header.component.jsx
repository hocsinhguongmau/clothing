import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../firebase/firebase.utils.js";

import { ReactComponent as Logo } from "../../assets/images/logo.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import * as styles from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <styles.HeaderContainer>
    <styles.LogoContainer to="/">
      <Logo />
    </styles.LogoContainer>
    <styles.OptionContainer>
      <styles.OptionLink to="/shop">SHOP</styles.OptionLink>
      <styles.OptionLink to="/contact">CONTACT</styles.OptionLink>
      {currentUser ? (
        <styles.OptionLink
          as="div"
          className="option"
          onClick={() => auth.signOut()}
        >
          SIGN OUT
        </styles.OptionLink>
      ) : (
        <styles.OptionLink to="/signin">SIGN IN</styles.OptionLink>
      )}
      <CartIcon />
    </styles.OptionContainer>
    {hidden ? null : <CartDropdown />}
  </styles.HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
