import React, { useEffect } from 'react';
import { getQuestionById, editQuestion } from '../../../../store/middlewares/questionMiddeware';
import { GetQuestionStateContext } from '../../../../store/context/questionContext';
import { Button, Card, Col, Form, Input, Row, Select } from 'antd';
import { WrapContent } from '../../../../utilities/styledComponent/_shared';
import { GetSubjectStateContext } from '../../../../store/context/subjectContext';
import { getSubjectList } from '../../../../store/middlewares/subjectMiddleware';
import { useParams } from 'react-router';
import LoadingForm from '../../../shared/LoadingForm';

const { Option } = Select;

const QuestionEdit = () => {
    const [form] = Form.useForm();
    const { questionId } = useParams();
    const gutter = [16, 0];
    const { questionEditState, createDispatch, questionSingleState, singleDispatch } = GetQuestionStateContext();
    const { subjectListState, listDispatch } = GetSubjectStateContext();

    const onFinish = (values) => {
        values.questionId = questionSingleState.question?._id;
        editQuestion(createDispatch, values);
    }
    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!',
        types: {
            // eslint-disable-next-line
            email: '${label} is not a valid email!',
        },
    };

    const renderSubject = () => {
        return subjectListState.subjects?.map((s) => {
            return (
                <Option key={s._id} value={s._id}>{s.name}</Option>
            );
        });
    }

    const onReset = () => {
        setDefaultValue();
    }

    const setDefaultValue = () => {
        const question = questionSingleState.question;
        if (question) {
            form.setFields([{
                name: 'name',
                value: question.name,
                errors: []
            }, {
                name: 'level',
                value: question.level,
                errors: []
            }, {
                name: 'optionA',
                value: question.optionA,
                errors: []
            }, {
                name: 'optionB',
                value: question.optionB,
                errors: []
            }, {
                name: 'optionC',
                value: question.optionC,
                errors: []
            }, {
                name: 'optionD',
                value: question.optionD,
                errors: []
            }, {
                name: 'subject',
                value: question.subject,
                errors: []
            }, {
                name: 'correctOptionPosition',
                value: question.correctOptionPosition,
                errors: []
            }]);
        }
    }

    useEffect(() => {
        getQuestionById(singleDispatch, { questionId });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (questionSingleState.question)
            getSubjectList(listDispatch).then((res) => {
                if (res)
                    setDefaultValue();
            });
        // eslint-disable-next-line
    }, [questionSingleState.question]);
    return (
        <>
            <WrapContent
                padding='24px 24px 0'
            >
                <Card
                    title='Edit Question'
                >
                    {(questionEditState.pending || questionSingleState.pending) && <LoadingForm />}
                    <Form
                        onFinish={onFinish}
                        form={form}
                        validateMessages={validateMessages}
                        layout='vertical'
                    >
                        <Row
                            gutter={gutter}
                        >
                            <Col lg={12} sm={24}>
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
                            <Col lg={12} sm={24}>
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
                            <Col lg={12} sm={24}>
                                <Form.Item
                                    label="Answer Correct"
                                    name="correctOptionPosition"
                                    rules={[{ required: true }]}
                                >
                                    <Select>
                                        <Option value={1}>Answer A</Option>
                                        <Option value={2}>Answer B</Option>
                                        <Option value={3}>Answer C</Option>
                                        <Option value={4}>Answer D</Option>
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
                                    loading={questionEditState.pending || questionSingleState.pending}
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

export default QuestionEdit;