import { Button } from 'antd';
import styled from 'styled-components';

export const ButtonRow = styled.div`
    display:flex;
    justify-content:center;
`

export const FlexCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0 5px;

    @media (min-width: 1200px) {
        width: 48%;
    }

    @media (min-width: 980px) {
        width: 100%;
    }
`

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    
    @media (max-width: 980px) {
        flex-direction: column;
        flex-wrap:wrap;
        margin:0;
    }
`

export const ButtonBack = styled(Button)`
    position:absolute;
    top:0;
    height:100%;
    border:unset
`