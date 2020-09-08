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

export const ModalHeader = styled.div`
  background-color: #f93449;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 16px 10px;
  position: relative;
  width: 100%;
`;

export const TextHeader = styled.div`
  font-size: 17px;
  font-weight: 700;
  line-height: 22px;
`;

export const ModalBox = styled.div`
  background-color: #fff;
  height: 100%;
  overflow-x: hidden;
  padding: 0;
  position: fixed;
  overflow-y: auto;
  top: 10px;
  width: 100%;
  @media (min-width: 992px) {
    height: auto;
    margin: 0 auto;
    max-height: 660px;
    max-width: ${(props) => (props['width'] ? props['width'] : '500px')};
    padding: 0;
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  height: 20px;
  width: 20px;
`;

export const ButtonClose = styled.img`
  transition: .5s;
  :hover {
    opacity: .8;
  }
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  height: calc(100% - 56px);
  padding: 15px;
`;
