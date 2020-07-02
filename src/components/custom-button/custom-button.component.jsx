import React from "react";

import * as styles from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <styles.CustomButtonContainer {...props}>
    {children}
  </styles.CustomButtonContainer>
);

export default CustomButton;
