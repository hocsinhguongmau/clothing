import styled, { css } from "styled-components";

const SubColor = "grey";
const MainColor = "black";
const ShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${MainColor};
`;

const getInputStyles = (props) => {
  return props.shrink ? ShrinkLabel : null;
};

const inputStyles = css`
  color: ${SubColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const FormInputLabelContainer = styled.div`
  ${inputStyles}
  ${getInputStyles}
`;

export const FormInputContainer = styled.div`
  background: none;
  background-color: white;
  color: ${SubColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${SubColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabelContainer} {
    ${ShrinkLabel}
  }
`;
export const InputPassword = styled.input`
  letter-spacing: 0.3em;
`;
