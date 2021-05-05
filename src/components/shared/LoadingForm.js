import { Spin } from 'antd';
import React from 'react';
import { WrapContent } from '../../utilities/styledComponent/_shared';

function LoadingForm(props) {
    return (
        <>
            <WrapContent
                height='100%'
                width='100%'
                position='absolute'
                zIndex='1'
                backgroundColor='#ffffff17'
            >
                <WrapContent
                    width='100%'
                    height='100%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Spin size='large'></Spin>
                </WrapContent>
            </WrapContent>
        </>
    );
}

export default LoadingForm;