import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: block;
  & .input-search {
    display: inline-block;
    width: 200px;
    margin: 16px;
  }
  & .site-layout-background {
    background-color: white;
    padding:0 10px;
    display: flex;
    justify-content: space-between;
  }
  & .icon {
    display: inline-block;
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: #1890ff;
    }
  }
  & .notification-icon {
    line-height: 40px;
    padding: 0 5px;
  }
`;

