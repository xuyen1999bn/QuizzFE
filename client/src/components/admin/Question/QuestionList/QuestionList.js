import { Button, Card, Table, Tooltip } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { showDeleteConfirm } from "../../../../utilities/helpers/notification";
import {
    deleteQuestion,
    getQuestionList,
} from "../../../../store/middlewares/questionMiddeware";
import { GetQuestionStateContext } from "../../../../store/context/questionContext";
import ButtonGroup from "antd/lib/button/button-group";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { WrapContent } from "../../../../utilities/styledComponent/_shared";
function QuestionList() {
    const {
        questionListState,
        questionDeleteState,
        deleteDispatch,
        listDispatch
    } = GetQuestionStateContext();
    const history = useHistory();

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
                        <Tooltip placement="topLeft" title="Edit">
                            <Button
                                onClick={() => {
                                    history.push("/question/edit/" + record._id);
                                }}
                                icon={<EditOutlined />}
                            ></Button>
                        </Tooltip>
                        <Tooltip placement="topLeft" title="Delete">
                            <Button
                                danger
                                onClick={() =>
                                    showDeleteConfirm(
                                        "Delete row " + record.name,
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

    const onDeleted = (result, record) => {
        if (result) {
            deleteQuestion(deleteDispatch, { questionId: record._id });
        }
    };

    useEffect(() => {
        getQuestionList(listDispatch);
        // eslint-disable-next-line
    }, [questionDeleteState.questionDeleted]);

    return (
        <>
            <WrapContent
                padding='24px 24px 0'
            >
                <Card
                    title='Question List'
                >
                    <Table
                        dataSource={questionListState.questions}
                        columns={columns}
                        loading={questionListState.pending}
                        rowKey={(record) => record._id}
                        pagination={questionListState.pagination}
                    />
                </Card>
            </WrapContent>
        </>
    );
}

export default QuestionList;
