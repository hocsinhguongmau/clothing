import styled, { css } from "styled-components";

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const getMenuStyles = (props) => {
  return props.size ? MenuItemLarge : null;
};

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: #fff;
  opacity: 0.7;
  text-transform: uppercase;
  position: absolute;
`;

const MenuItemStyles = css`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImageContainer} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${ContentContainer} {
      opacity: 0.9;
    }
  }
`;

export const MenuItem = styled.div`
  ${MenuItemStyles}
  ${getMenuStyles}
`;

export const MenuItemLarge = css`
  height: 380px;
`;

export const TitleContainer = styled.div`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const SubtitleContainer = styled.div`
  font-weight: lighter;
  font-size: 16px;
`;
