export const getNameSeller = (skuId: string) => {
  let name:string;

  switch(skuId) {
    case '1':
      name = 'Apple';
      break;
    case '2':
      name = 'SellerUrbanoPrueba';
      break;
    default:
      name = 'PruebaAPISeller33';
      break;
  }

  return name;
};
