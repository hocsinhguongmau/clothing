import styled, { css } from "styled-components";

const lineStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const QuantityContainer = styled.div`
  ${lineStyles}
  width: 23%;
  display: flex;
`;

export const NameContainer = styled.div`
  ${lineStyles}
`;

export const PriceContainer = styled.div`
  ${lineStyles}
`;
export const ArrowContainer = styled.div`
  cursor: pointer;
`;

export const ValueContainer = styled.div`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
