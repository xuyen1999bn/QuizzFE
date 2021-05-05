import { List } from 'antd';
import styled from 'styled-components';

const { Item } = List;

export const ModalRankedStyled = styled(List)`
    
`;

export const ModalRankedItemStyled = styled(Item)`
    .ant-list-item-meta-title{
        a{
            color:#fff;
        }
    }
    .ant-list-item-meta-description{
        color:#fff;
    }
`;