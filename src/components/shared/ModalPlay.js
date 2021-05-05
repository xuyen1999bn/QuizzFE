import { Button, Col, Row } from 'antd';
import React from 'react';
import { ModalPlayStyled } from '../../utilities/styledComponent/components/ModalPlay';
import { WrapContent } from '../../utilities/styledComponent/_shared';

function ModalPlay({ modal, handleOk, handleCancel }) {
    const { isVisible, subject } = modal;
    return (
        <>
            <ModalPlayStyled
                title="Play Game"
                visible={isVisible}
                centered
                onCancel={handleCancel}
                footer={
                    <>
                        <Button
                            key="submit"
                            type="primary"
                            onClick={() => handleOk(subject)}
                            className='ant-btn-play'
                        >
                            View Detail
                        </Button>
                    </>
                }
            >
                <>
                    <WrapContent>
                        <img src={subject?.image} alt={subject?.name} style={{ width: '100%', maxHeight: '500px' }} />
                    </WrapContent>
                    <WrapContent padding='12px'>
                        <WrapContent margin='0 0 10px'>
                            <Row>
                                <Col span={12}>
                                    <WrapContent float='left' className='head-mini-title'>
                                        <b><small>Question: {subject?.questionList?.length}</small></b>
                                    </WrapContent>
                                </Col>
                                <Col span={12}>
                                    <WrapContent float='right' className='head-mini-title'>
                                        <b><small>Played: {subject?.numOfPlayers}</small></b>
                                    </WrapContent>
                                </Col>
                            </Row>
                        </WrapContent>
                    </WrapContent>
                </>
            </ModalPlayStyled >
        </>
    );
}

export default ModalPlay;