import { Card } from 'antd';
import styled from 'styled-components';

export const PlayingCard = styled(Card)`
    height: calc(100vh - 48px);
    border:unset;

    .ant-card-head{
        background-image: linear-gradient(to right,#d37c75 0%,#76cff7 100%);
    }

    .ant-card-body{
        background-color:#1e2827;
        color: #fff;
        padding-top:0px;
    }

    .title-question{
        margin:0;
        color:#fff;
    }

    .score-current{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
        color: white;
        span{
            margin-left:5px;
        }
    }
`;

export const Answer = styled.div`
    border-radius: 20px;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: #fff;
    font-weight: 600;
    font-size: 19px;
    cursor: pointer;
    transition: all 0.5s;
    box-shadow: ${props =>
        props.active ?
            'rgba(255, 255, 255, 0.3) 15px -11px 15px inset, rgba(255, 255, 255, 0.3) -20px 25px 18px inset' :
            'rgba(0, 0, 0, 0.3) -17px 15px 21px inset, rgba(0, 0, 0, 0.5) 8px -5px 21px inset'
    } ;
    ${props => {
        if (props.activeAnimation) {
            console.log(props.activeAnimation)
            return props.checked ?
                `background-image: linear-gradient(43deg,rgb(65 208 152) 0%,rgb(80 200 168) 46%,rgb(170 255 112) 100%)` :
                `background-image: linear-gradient(43deg,#e57373 0%,#e53935 46%,#e57373 100%)`
        } else {
            return props.active ?
                `background-image:  linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)` :
                `background-image: linear-gradient(43deg, rgb(89 102 173) 0%, rgb(200, 80, 192) 46%, rgb(203 154 66) 100%)`;
        }
    }};

    .right-question{
        background-color: #0000007a;
        color: white;
        font-weight: bold;
        position: absolute;
        right: 40px;
        top: 32%;
        padding: 4px 15px;
        display: flex;
        border-radius: 10px;
        justify-content: center;
    }

    .title-answer{
        position: absolute;
        top: 0;
        left: 0;
        padding: 31px 32px;
    }
`;

// boxShadow: `rgba(255, 255, 255, 0.3) 15px -11px 15px inset, rgba(255, 255, 255, 0.3) -20px 25px 18px inset`,
// boxShadow: `rgba(0, 0, 0, 0.2) 3px -2px 21px inset, rgba(0, 0, 0, 0.2) -8px 2px 21px inset`,

export const QuestionContent = styled.div`
    margin: auto;
    padding: 20px 0;
    max-width: 730px;
    height: calc(100% - 33px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 17px;
    color: #fff;
`;

export const ResultView = styled.div`
    height: calc(100vh - 53px - 48px - 65px - 30px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background:
    ${props => props.failed ? `url('https://image.freepik.com/free-vector/game-with-glitch-effect_225004-661.jpg')` :
        `url('https://media.istockphoto.com/videos/amazing-explosion-animation-with-text-congratulations-video-id1138902499?s=640x640')`
    };
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .result-background{
        position: absolute;
        inset: 0;                  
        background-color: #00000057;
    }

    .result-content{
        position: relative;
        z-index:2;
        font-weight:bold;
        text-align:center;

        h2{
            color: #fff;
            margin-bottom:20px;
        }
        p{
            font-size:20px;
            margin-bottom:5px;
        }
    }                  
`