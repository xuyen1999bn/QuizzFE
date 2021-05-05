import { Button, Card, Table, Tooltip } from "antd";
import React, { useEffect } from "react";
import { showActiveConfirm, showDeleteConfirm } from "../../../../utilities/helpers/notification";
import {
    activeQuestion,
    deleteQuestion,
    getQuestionNotActiveList,
} from "../../../../store/middlewares/questionMiddeware";
import { GetQuestionStateContext } from "../../../../store/context/questionContext";
import ButtonGroup from "antd/lib/button/button-group";
import { ToTopOutlined, DeleteOutlined } from "@ant-design/icons";
import { WrapContent } from "../../../../utilities/styledComponent/_shared";
function QuestionList() {
    const {
        questionListNotActiveState,
        listNotActiveDispatch,
        deleteDispatch,
        questionDeleteState,
        questionActiveState,
        activeDispatch,
    } = GetQuestionStateContext();

    const columns = [
        {
            title: "Question Content",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Question level",
            dataIndex: "level",
            key: "level",
        },
        {
            title: "Subject",
            dataIndex: "subject",
            key: "subject",
            render: (text) => {
                return (
                    <>
                        {text?.name || "-"}
                    </>
                )
            }
        },
        {
            title: "Point",
            dataIndex: "point",
            key: "point",
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (text, record) => {
                return (
                    <ButtonGroup>
                        <Tooltip placement="top" title="Get Question">
                            <Button
                                onClick={() =>
                                    showActiveConfirm(
                                        "Active Question :" + record.name,
                                        record,
                                        onActive
                                    )
                                }
                                icon={<ToTopOutlined />}
                            ></Button>
                        </Tooltip>
                        <Tooltip placement="top" title="Delete Question">
                            <Button
                                danger
                                onClick={() =>
                                    showDeleteConfirm(
                                        "Delete Question :" + record.name,
                                        record,
                                        onDeleted
                                    )
                                }
                                icon={<DeleteOutlined />}
                            ></Button>
                        </Tooltip>
                    </ButtonGroup>
                );
            },
        },
    ];
    // eslint-disable-next-line
    const onDeleted = (result, record) => {
        if (result) {
            deleteQuestion(deleteDispatch, { questionId: record._id });
        }
    };

    const onActive = (result, record) => {
        if (result) {
            activeQuestion(activeDispatch, { questionId: record._id });
        }
    }

    useEffect(() => {
        getQuestionNotActiveList(listNotActiveDispatch);
        // eslint-disable-next-line
    }, [questionActiveState.questionActive, questionDeleteState.questionDeleted]);

    return (
        <>
            <WrapContent
                padding='24px 24px 0'
            >
                <Card
                    title='Question List'
                >
                    <Table
                        dataSource={questionListNotActiveState.questions}
                        columns={columns}
                        loading={questionListNotActiveState.pending}
                        rowKey={(record) => record._id}
                        pagination={questionListNotActiveState.pagination}
                    />
                </Card>
            </WrapContent>
        </>
    );
}

export default QuestionList;
