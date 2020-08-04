import React, { useContext } from 'react';
import { ProductContext } from 'vtex.product-context';
import { path } from 'ramda';

interface IProps {
  image: string;
}

const getSkuId = path(['selectedItem', 'itemId']);
const getProductId = path(['product', 'productId']);

const BrandLogo = (props:IProps) => {

  const { image } = props;
  const productContext = useContext(ProductContext);
  const skuId = getSkuId(productContext);
  const productId = getProductId(productContext);

  return (
    <div>
      <span>Vendido por:</span>
      <img src={image} />
      <div>skuId: {skuId}</div>
      <div>productId: {productId}</div>
    </div>
  );
}

export default BrandLogo;
