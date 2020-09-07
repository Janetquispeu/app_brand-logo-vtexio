import styled from 'styled-components';

export const ModalBackground = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  width: ${(props) => (props['width'] ? props['width'] : '800px')};
  height: 400px;
  overflow-y: scroll;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const ButtonClose = styled.span`
  cursor: pointer;
  transition: .5s;
  :hover {
    opacity: .8;
  }
`;

export const Content = styled.div`
  margin: 20px 30px;
  overflow: hidden;
`;
