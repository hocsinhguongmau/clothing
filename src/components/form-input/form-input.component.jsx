import React from "react";

import * as styles from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <styles.GroupContainer>
    <styles.FormInputContainer
      as="input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <styles.FormInputLabelContainer shrink>
        {label}
      </styles.FormInputLabelContainer>
    ) : null}
  </styles.GroupContainer>
);

export default FormInput;
