import styled from 'styled-components';
import { Card, Col } from 'antd';

export const CardStyled = styled(Card)`
    width: 100%;
    border-radius:15px;
    margin-top:10px;
    margin-bottom:20px;
    max-width: ${props => props.maxwidth || 'unset'};

    .ant-card-actions{
       border-bottom-left-radius:15px;
       border-bottom-right-radius:15px;
       background-color:#f7f7f77d;
       li{
        margin:0px;
        padding:12px 0px;
            :hover{
                background-color:#efefef;
            };
            :active,:focus{
                background-color:#cecece7d;
            }
       };
    }
    .ant-card-cover{
       border-top-left-radius:15px;
       border-top-right-radius:15px;
       overflow:hidden;
    }

    :first-child{
        margin-top:20px
    }
`;

export const ColStyled = styled(Col)`
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
`;