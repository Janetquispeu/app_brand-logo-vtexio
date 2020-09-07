import React, { useContext, useState, useEffect, FunctionComponent } from 'react';
// import { ProductContext } from 'vtex.product-context';
import { path } from 'ramda';
import { masterDataService } from '../../services/masterdata';
import { icons } from '../../assets/icons/index';
import { Icon } from '../Icon';
import Modal from '../Modal';
import { getNameSeller } from '../../utils';
import { BrandLogoWrapper, Image, Content, ImageWrapper, IconWrapper } from './styled';

interface ISeller {
  imageUrl: string;
  terms: string;
}

const getSkuId = path(['selectedItem', 'itemId']);

const BrandLogo: FunctionComponent = () => {
  const [seller, setSeller] = useState<ISeller>({
    imageUrl: '',
    terms: ''
  });
  const [visible, setVisible] = useState(false);
  // const productContext = useContext(ProductContext);
  // const skuId:any = getSkuId(productContext);
  const skuId = '1';

  useEffect(() => {
    const nameSeller = getNameSeller(skuId.toString());
    const seller = async () => {
      await serviceSeller(nameSeller);
    }
    seller();
  }, []);

  const serviceSeller = async (seller: string) => {
    const store = await masterDataService.getMasterData(seller);

    setSeller({
      imageUrl: store.data[0].imageUrl,
      terms: store.data[0].terms
    });
  };

  const closeModal = () => {
    setVisible(false);
  };

  const showModal = () => {
    setVisible(true);
  };

  return(
    <BrandLogoWrapper>
      <Content>
        <span>Vendido por:</span>
        <ImageWrapper>
          <Image src={seller.imageUrl} />
        </ImageWrapper>
        <IconWrapper onClick={showModal}>
          <Icon icon={icons.close} fill="#C4C4C4" size="18px" />
        </IconWrapper>
      </Content>
      <Modal width='800px' visible={visible} handlerClose={closeModal}>
        {seller.terms}
      </Modal>
    </BrandLogoWrapper>
  );
}

export default BrandLogo;
