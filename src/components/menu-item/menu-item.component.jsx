import React from "react";
import { withRouter } from "react-router-dom";

import * as styles from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <styles.MenuItem
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <styles.BackgroundImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    ></styles.BackgroundImageContainer>
    <styles.ContentContainer>
      <styles.TitleContainer as="h1">{title}</styles.TitleContainer>
      <styles.SubtitleContainer as="span">SHOP NOW</styles.SubtitleContainer>
    </styles.ContentContainer>
  </styles.MenuItem>
);

export default withRouter(MenuItem);
