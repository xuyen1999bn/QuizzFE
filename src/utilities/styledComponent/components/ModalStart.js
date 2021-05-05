import { Card, Modal } from 'antd';
import styled from 'styled-components';

export const ModalStartStyled = styled(Modal)`
    width:1080px;
    height:100vh;
    padding:16px 0px;
    
    .ant-modal-header{
        background-color:#1c1c1cf7;
        border:unset;
    }
    .ant-modal-body{
        height: calc(100% - 55px);
        background-color:#1c1c1cf7;
    }
    .ant-modal-footer{
        padding:0;
        border:unset;
    }
    .ant-modal-content{
        height: 100%;
        width: 100%;
        border:unset;
        background:unset;
    }
    .ant-modal-close{
        color:#fff;
    }

    .ant-btn-play{
        background-color: #63b967;
        border-color: #63b967;
        width: 100%;
        height: 50px;
        font-weight: 500;
        font-size: 18px;

        :hover{
            background-color: #6ec472;
            border-color: #6ec472;
        }

        :active,:focus{
            background-color: #4eb153;
            border-color: #4eb153;
        }
    }
`;

export const CardModalStart = styled(Card)`
    background-color:unset;
    border:unset;
    color:#fff;
    min-height: calc(100vh - 205px);

    .ant-card-head-title{
        color:#fff;
    }
`