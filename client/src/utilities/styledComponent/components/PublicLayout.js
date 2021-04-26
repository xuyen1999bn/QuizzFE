import { Layout, Input } from "antd";
import styled from "styled-components";
const { Header } = Layout;
const { Search } = Input;

export const HeaderStyled = styled(Header)`
  background-color: #fff;
  height: 72px;
  position: fixed;
  z-index: 1;
  width: 100%;
  border-bottom: 2px solid rgba(0,0,0,.21);
  .container-search{
    display: flex;
    position: relative;
    .container-subject-list{
      position: absolute;
      top: 32px;
      background: #fff;
      width: 100%;
      border: 1px solid #eee;
      border-radius: 6px;

      .subject-item{
        border-bottom:1px solid #eee;

        :hover{
          background-color: #eee;
          cursor:pointer;
        }

        .container-img{
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      }
    }
  }
`;

export const SearchPublic = styled(Search)`
  width: 400px;
  input{
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
  }
  .ant-input-group-addon{
    border-top-right-radius:10px;
    border-bottom-right-radius:10px;
    overflow:hidden;
  }
`;