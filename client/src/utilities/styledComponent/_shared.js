import LogoDefault from '../../assets/logo.png';
import styled from 'styled-components';

export const Logo = styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    background-image: url(${props => LogoDefault});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    margin: ${props => props.margin || '16px 24px 16px 0'};
    float: ${props => props.float};
`;

export const WrapContent = styled.div`
    font-weight: ${props => props.fontWeight};
    z-index:${props => props.zIndex};
    position: ${props => props.position};
    height: ${props => props.height};
    width: ${props => props.width};
    padding: ${props => props.padding};
    margin: ${props => props.margin};
    float: ${props => props.float};
    text-align: ${props => props.textAlign};
    background-color: ${props => props.backgroundColor};
    background-image: ${props => props.backgroundImage};
    background-size: ${props => props.backgroundSize};
    border-radius: ${props => props.borderRadius};
    min-height: ${props => props.minHeight};
    max-height: ${props => props.maxHeight};
    min-width: ${props => props.minWidth};
    max-width: ${props => props.maxWidth};
    display: ${props => props.display};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    overflow-y: ${props => props.overflowY};
    opacity: ${props => props.opacity};
    top: ${props => props.top};
    left: ${props => props.left};
    right: ${props => props.right};
    bottom: ${props => props.bottom};
`;