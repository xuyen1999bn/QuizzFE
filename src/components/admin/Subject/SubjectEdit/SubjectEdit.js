import React, { useEffect, useState } from 'react';
import { editSubject, getSubjectById } from '../../../../store/middlewares/subjectMiddleware';
import { GetSubjectStateContext } from '../../../../store/context/subjectContext';
import { Button, Card, Col, Form, Input, message, Row, Select, Upload } from 'antd';
import { storage } from '../../../../firebase/firebase';
import {
    LoadingOutlined,
    PlusOutlined
} from "@ant-design/icons";
import { WrapContent } from '../../../../utilities/styledComponent/_shared';
import LoadingForm from '../../../shared/LoadingForm';
import { useParams } from 'react-router';

const { Option } = Select;

const SubjectEdit = () => {
    const [form] = Form.useForm();
    const { subjectId } = useParams();
    const gutter = [16, 0];
    const [fbUpload, setFbUpload] = useState({
        imageUrl: '',
        loading: false,
    });
    const { subjectEditState, editDispatch, subjectSingleState, singleDispatch } = GetSubjectStateContext();
    const onFinish = (values) => {
        values.subjectId = subjectSingleState.subject?._id;
        values.image = fbUpload.imageUrl;
        editSubject(editDispatch, values);
    }
    const validateMessages = {
        // eslint-disable-next-line
        required: '${label} is required!',
        types: {
            // eslint-disable-next-line
            email: '${label} is not a valid email!',
        },
    };

    const handleFireBaseUpload = (imageFile) => {
        setFbUpload({
            ...fbUpload,
            loading: true,
            imageUrl: ''
        });
        if (imageFile === null) {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageFile.name}`).put(imageFile)
        uploadTask.on('state_changed',
            (snapShot) => {
            }, (err) => {
                setFbUpload({
                    ...fbUpload,
                    loading: false,
                });
                message.error({
                    content: 'Upload img error. Try again',
                    duration: 3
                });
            }, () => {
                storage.ref('images').child(imageFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        setFbUpload({
                            ...fbUpload,
                            loading: false,
                            imageUrl: fireBaseUrl
                        });
                    });
            })
    }

    const onReset = () => {
        setDefaultValue();
    }

    const setDefaultValue = () => {
        const subject = subjectSingleState.subject;
        if (subject) {
            form.setFields([{
                name: 'name',
                value: subject.name,
                errors: []
            }, {
                name: 'level',
                value: subject.level,
                errors: []
            }, {
                name: 'description',
                value: subject.description
            }]);
            setFbUpload({
                imageUrl: subject.image,
                loading: false,
            });
        }
    }

    useEffect(() => {
        getSubjectById(singleDispatch, { subjectId })
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (subjectSingleState.subject)
            setDefaultValue();
            // eslint-disable-next-line
    }, [subjectSingleState.subject]);

    return (
        <>
            <WrapContent
                padding='24px 24px 0'
            >
                <Card
                    title='Edit Subject'
                >
                    {(subjectEditState.pending || subjectSingleState.pending) && <LoadingForm />}
                    <Form
                        onFinish={onFinish}
                        form={form}
                        validateMessages={validateMessages}
                        layout='vertical'
                    >
                        <Row gutter={gutter}>
                            <Col lg={19} sm={24}>
                                <Row
                                    gutter={gutter}
                                >
                                    <Col lg={12} sm={24}>
                                        <Form.Item
                                            label="Subject Name"
                                            name="name"
                                            rules={[{ required: true }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
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
                                            label="Description"
                                            name="description"
                                            rules={[{ required: true }]}
                                        >
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={5} sm={24}
                                style={{
                                    justifyContent: 'center',
                                    display: 'flex'
                                }}
                            >
                                <Form.Item
                                    name="image"
                                    label='Image'
                                >
                                    <WrapContent
                                        width='100%'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='center'
                                    >
                                        <Upload
                                            name="avatar"
                                            listType="picture-card"
                                            className="avatar-uploader"
                                            showUploadList={false}
                                            beforeUpload={(file) => {
                                                handleFireBaseUpload(file);
                                                return false;
                                            }}
                                            style={{ width: 'unset' }}
                                        >
                                            {fbUpload.imageUrl ?
                                                <img src={fbUpload.imageUrl} alt="avatar" style={{ width: '100%' }} /> :
                                                <div>
                                                    {fbUpload.loading ? <LoadingOutlined /> : <PlusOutlined />}
                                                    <div style={{ marginTop: 8 }}>Upload</div>
                                                </div>
                                            }
                                        </Upload>
                                    </WrapContent>
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
                                    loading={subjectEditState.pending || fbUpload.loading || subjectSingleState.pending}
                                > Save </Button>
                                <Button onClick={onReset}> Reset </Button>
                            </WrapContent>
                        </Row>
                    </Form>
                </Card>
            </WrapContent>
        </>
    );
}

export default SubjectEdit;