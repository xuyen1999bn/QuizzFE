import React, { useEffect } from 'react';
import { createQuestion } from '../../../store/middlewares/questionMiddeware';
import { GetQuestionStateContext } from '../../../store/context/questionContext';
import { Button, Card, Col, Form, Input, message, Modal, Row, Select } from 'antd';
import { WrapContent } from '../../../utilities/styledComponent/_shared';
import { GetSubjectStateContext } from '../../../store/context/subjectContext';
import { getSubjectList } from '../../../store/middlewares/subjectMiddleware';
import LoadingForm from '../../shared/LoadingForm';
import { GetAuthStateContext } from '../../../store/context/authContext';
import { useHistory } from 'react-router';

const { Option } = Select;

const QuestionCreate = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const gutter = [16, 0];
    const { questionCreateState, createDispatch } = GetQuestionStateContext();
    const { subjectListState, listDispatch } = GetSubjectStateContext();
    const { authState } = GetAuthStateContext();

    const onFinish = (values) => {
        if (authState.accessToken && localStorage.getItem('token_access')) {
            createQuestion(createDispatch, values).then((res) => {
                if (res.result) {
                    message.success({
                        content: 'Chúng tôi đã nhận được câu hỏi của bạn'
                    });
                }
            });
        } else {
            Modal.confirm({
                title: 'You need login to send questions for us',
                onOk: () => { history.push('/auth/login') }
            });
        }
    }
    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!',
        types: {
            // eslint-disable-next-line
            email: '${label} is not a valid email!',
        },
    };

    useEffect(() => {
        getSubjectList(listDispatch);
        // eslint-disable-next-line
    }, []);

    const renderSubject = () => {
        return subjectListState.subjects?.map((s) => {
            return (
                <Option keys={s._id} value={s._id}>{s.name}</Option>
            );
        });
    }

    const onReset = () => {
        form.resetFields();
    }

    return (
        <>
            <WrapContent
                padding='24px 24px 0'
            >
                <Card
                    title='Send Question To Us'
                >
                    {(questionCreateState.pending) && <LoadingForm />}
                    <Form
                        onFinish={onFinish}
                        form={form}
                        validateMessages={validateMessages}
                        layout='vertical'
                    >
                        <Row
                            gutter={gutter}
                        >
                            <Col lg={12} sm={24} className="col-input">
                                <Form.Item
                                    label="Level"
                                    name="level"
                                    rules={[{ required: true }]}
                                >
                                    <Select>
                                        <Option value="EASY">EASY</Option>
                                        <Option value="MEDIUM">MEDIUM</Option>
                                        <Option value="HARD">HARD</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} className="col-input">
                                <Form.Item
                                    label="Subject"
                                    name="subject"
                                    rules={[{ required: true }]}
                                >
                                    <Select>
                                        {renderSubject()}
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col lg={24} sm={24}>
                                <Form.Item
                                    label="Question Content"
                                    name="name"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24}>
                                <Form.Item
                                    label="Answer A"
                                    name="optionA"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24}>
                                <Form.Item
                                    label="Answer B"
                                    name="optionB"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24}>
                                <Form.Item
                                    label="Answer C"
                                    name="optionC"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24}>
                                <Form.Item
                                    label="Answer D"
                                    name="optionD"
                                    rules={[{ required: true }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col lg={12} sm={24} className="col-input">
                                <Form.Item
                                    label="Answer Correct"
                                    name="correctOptionPosition"
                                    rules={[{ required: true }]}
                                >
                                    <Select>
                                        <Option value="1">Answer A</Option>
                                        <Option value="2">Answer B</Option>
                                        <Option value="3">Answer C</Option>
                                        <Option value="4">Answer D</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            <WrapContent
                                display='flex'
                                justifyContent='center'
                                width='100%'
                            >
                                <Button
                                    type="primary" htmlType='submit'
                                    loading={questionCreateState.pending}
                                > Save </Button>
                                <Button onClick={onReset}>Reset</Button>
                            </WrapContent>
                        </Row>
                    </Form>
                </Card>
            </WrapContent>
        </>
    );
}

export default QuestionCreate;