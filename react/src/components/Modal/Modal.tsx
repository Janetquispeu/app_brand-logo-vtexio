import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '../Icon';
import { icons } from '../../assets/icons';
import { ModalBackground, ModalBox, ButtonWrapper, ButtonClose, Content } from './styled';

interface IProps {
  children: React.ReactNode;
  visible: boolean;
  handlerClose: () => void;
}


export const Modal: React.StatelessComponent<IProps> = ({ children, visible, handlerClose }) => {
  const body = window && window.document && window.document.body;
  
  if (!visible) return null;

  return createPortal(
    <ModalBackground>
      <ModalBox>
        <ButtonWrapper>
          <ButtonClose onClick={handlerClose}>
            <Icon icon={icons.close} fill="#C4C4C4" size="18px" />
          </ButtonClose>
        </ButtonWrapper>
        <Content>
          {children}
        </Content>
      </ModalBox>
    </ModalBackground>,
    body
  )
}
