import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import * as styles from "./sign-in-and-sign-up.styles";

const SignInAndSignUp = () => (
  <styles.SignInAndSignUp>
    <SignIn />
    <SignUp />
  </styles.SignInAndSignUp>
);

export default SignInAndSignUp;
