import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div>
    <h1>{title.toUpperCase()}</h1>
    <div>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;