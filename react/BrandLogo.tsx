import PropTypes from 'prop-types'
import React from 'react';

interface IProps {
  image: string;
}

export class BrandLogo extends React.Component<IProps, {}> {
  static propTypes = {
    image: PropTypes.string
  }

  render () {
    const { image } = this.props;

    return (
      <div>
        <span>Vendido por: </span>
        <img src={image} />
      </div>
    );
  }
}

export default BrandLogo;
