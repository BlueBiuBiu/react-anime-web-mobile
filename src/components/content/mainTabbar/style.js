import styled from 'styled-components'

export const MainTabbarWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 54px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  color: #eee;
  padding-top: 5px;
  border-top: 1px solid #aaa;
  background: rgb(76,76,76);
  z-index: 9;

  img {
    width: 22px;
    height: 22px;
    }
  
  a {
    text-decoration: none;
    color: #aaa;
    font-size: 13px;

    &.active {
      color: #ffffff;
    }
  }

`
