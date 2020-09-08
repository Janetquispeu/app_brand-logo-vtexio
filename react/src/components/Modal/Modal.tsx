import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../Icon';
import { icons } from '../../assets/icons';
import { ModalBackground, ModalHeader, TextHeader, ModalBox, ButtonWrapper, ButtonClose, Content } from './styled';

interface IProps {
  children: React.ReactNode;
  visible: boolean;
  handlerClose: () => void;
  width: string;
}


export const Modal: React.StatelessComponent<IProps> = ({ children, visible, handlerClose, width }) => {
  const body = window && window.document && window.document.body;

  if (!visible) return null;

  return createPortal(
    <ModalBackground>
      <ModalBox data-width={width}>
        <ModalHeader>
          <TextHeader>CONDICIONES DEL PROVEEDOR</TextHeader>
          <ButtonWrapper onClick={handlerClose}>
            <ButtonClose src={icons.close}></ButtonClose>
          </ButtonWrapper>
        </ModalHeader>
        <Content>
          {children}
        </Content>
      </ModalBox>
    </ModalBackground>,
    body
  )
}
