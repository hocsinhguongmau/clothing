import React from "react";

import { withRouter } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item.component";

import * as styles from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <styles.CollectionPreviewContainer>
    <styles.TitleContainer
      as="h1"
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title}
    </styles.TitleContainer>
    <styles.PreviewContainer>
      {items
        .filter((item, index) => index < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </styles.PreviewContainer>
  </styles.CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
