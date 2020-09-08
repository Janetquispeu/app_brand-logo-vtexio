import React from 'react';
import { IconWrapper } from './styled';

interface Props {
  icon: string;
  fill?: string;
  size?: string;
}

export const Icon: React.SFC<Props> = ({ icon, fill, size }) => {
  const routeSplit = icon.split('/');
  const iconName = routeSplit[routeSplit.length - 1].split('.')[0];

  return (
    <IconWrapper data-fill={fill} data-size={size}>
      <svg className={`icon icon-close`}>
        <use xlinkHref={`${icon}#icon-close`} />
      </svg>
    </IconWrapper>
  );
};
