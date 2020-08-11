import React from 'react';
import { IconWrapper } from './styled';

interface Props {
  icon: string;
  fill?: string;
  size?: string;
}

export const Icon: React.SFC<Props> = ({ icon, fill, size }) => {
  const routeSplit = icon.split('/');
  console.log(icon, 'icon');
  console.log(routeSplit, 'routeSplit');
  const iconName = routeSplit[routeSplit.length - 1].split('.')[0];
  console.log(iconName, 'iconName');

  return (
    <IconWrapper data-fill={fill} data-size={size}>
      <svg className={`icon ${iconName}`}>
        <use xlinkHref={`${icon}#${iconName}`} />
      </svg>
    </IconWrapper>
  );
};
