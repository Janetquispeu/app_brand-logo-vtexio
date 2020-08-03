import PropTypes from 'prop-types'
import React, { Component } from 'react';
// import { ProductContext } from 'vtex.product-context';
import { path, any } from 'ramda';
// import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext';

interface IProps {
  image: string;
  query: any;
}

const hasSellerWithAvailableItems = (item: any) => {
  return item.sellers && any((params: any) => params.commertialOffer && params.commertialOffer.AvailableQuantity > 0, item.sellers)
}

export class BrandLogo extends Component<IProps, {}> {
  static propTypes = {
    image: PropTypes.string,
    query: PropTypes.shape({
      skuId: PropTypes.string,
    }),
  }

  get selectedItem() {
    const items: Array<any> = path(['productQuery', 'product', 'items'], this.props) || []
    if (!this.props.query || !this.props.query.skuId) {
      return items.find(hasSellerWithAvailableItems) || items[0]
    }
    return items.find((sku: any) => sku.itemId === this.props.query.skuId)
  }

  get commertialOffer() {
    return path(['sellers', 0, 'commertialOffer'], this.selectedItem)
  }

  render () {
    const {
      image
    } = this.props;
    
    // const productContext = useContext(ProductContext)
    console.log(this.commertialOffer);

    return (
      <div>
        <span>Vendido por: </span>
        <img src={image} />
      </div>
    );
  }
}

export default BrandLogo;