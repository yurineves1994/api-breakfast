import styled from 'styled-components';
import bgSidebarDesktop from '../../assets/bg-sidebar-desktop.png';
import bgSidebarMobile from '../../assets/bg-sidebar-mobile.png';

export const Container = styled.div`
  width: 940px;
  height: 601px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #ffffff;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    background-image: url(${bgSidebarDesktop});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    border-radius: 10px;
    height: 590px;
    width: 250px;
  }
  @media (max-width: 414px) {
    width: 100%;
    height: 100vh;
    /* position: absolute; */
    top: 0;
    left: 0;
    transform: translate(0, 0);
    box-shadow: none;
    border-radius: 0;

    &::after {
      content: '';
      top: 0;
      left: 0;
      background-image: url(${bgSidebarMobile});
      border-radius: 0;
      height: 300px;
      width: 100%;
    }
  }
`;
export const Content = styled.div`
  padding-left: 270px;
  height: 100%;

  @media (max-width: 414px) {
    padding: 120px 0 0;
  }
`;

export const SideBar = styled.div`
  height: 590px;
  position: absolute;
  left: 10px;
  z-index: 9999;

  @media (max-width: 414px) {
    width: 100%;
    height: 300px;
    left: 0;
  }
`;
