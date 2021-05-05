import { Modal } from 'antd';
import styled from 'styled-components';

export const ModalPlayStyled = styled(Modal)`
    .ant-modal-content{
        border-radius: 12px;
        overflow: hidden;
    }

    .ant-modal-body{
        padding:0;

        .head-mini-title{
            color:#9c9797
        }
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

    .ant-modal-header{
        border-bottom:unset;
        background-color:#00BCD4;

        .ant-modal-title{
            color: #fff;
        }
    }

    .ant-modal-footer{
        padding:0;
        text-align:unset;
    }

    .anticon svg{
        color: #fff
    }
`;