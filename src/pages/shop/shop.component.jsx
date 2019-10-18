import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        {collection.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
