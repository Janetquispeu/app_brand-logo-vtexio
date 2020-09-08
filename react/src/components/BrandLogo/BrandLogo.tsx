import React, { useContext, useState, useEffect, FunctionComponent } from 'react';
import { ProductContext } from 'vtex.product-context';
import { path } from 'ramda';
import { masterDataService } from '../../services/masterdata';
// import { icons } from '../../assets/icons/index';
// import { Icon } from '../Icon';
import Modal from '../Modal';
import { getNameSeller } from '../../utils';
import { BrandLogoWrapper, Image, Content, ImageWrapper, Text, LinkWrapper, Link, ModalLogo } from './styled';

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
  const productContext = useContext(ProductContext);
  const skuId:any = getSkuId(productContext);
  // const skuId = '1';

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
        <div>
          <Text>Vendido y despachado por:</Text>
          <LinkWrapper onClick={showModal}>
            <Link>Términos y condiciones</Link>
          </LinkWrapper>
        </div>
        <ImageWrapper>
          <Image src={seller.imageUrl} />
        </ImageWrapper>
      </Content>
      <Modal width='500px' visible={visible} handlerClose={closeModal}>
        <ModalLogo><Image src={seller.imageUrl} /></ModalLogo>
        <div>{seller.terms}</div>
      </Modal>
    </BrandLogoWrapper>
  );
}

export default BrandLogo;
