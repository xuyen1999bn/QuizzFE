import { Button, Card, Table } from "antd";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { showDeleteConfirm } from "../../../../utilities/helpers/notification";
import {
    deleteSubject,
    getSubjectList,
} from "../../../../store/middlewares/subjectMiddleware";
import { GetSubjectStateContext } from "../../../../store/context/subjectContext";
import ButtonGroup from "antd/lib/button/button-group";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { WrapContent } from "../../../../utilities/styledComponent/_shared";
function SubjectList() {
    const {
        subjectListState,
        subjectDeleteState,
        deleteDispatch,
        listDispatch
    } = GetSubjectStateContext();
    const history = useHistory();

    const columns = [
        {
            title: "Subject name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Question total",
            dataIndex: "numOfQuestions",
            key: "numOfQuestions",
        },
        {
            title: "Num of played",
            dataIndex: "numOfPlayers",
            key: "numOfPlayers",
        },
        {
            title: "Quantity question",
            dataIndex: "numOfQuestions",
            key: "numOfQuestions",
        },
        {
            title: "Action",
            key: "action",
            align: "center",
            render: (text, record) => {
                return (
                    <ButtonGroup>
                        <Button
                            onClick={() => {
                                history.push("/subject/edit/" + record._id);
                            }}
                            icon={<EditOutlined />}
                        ></Button>
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
                    </ButtonGroup>
                );
            },
        },
    ];

    const onDeleted = (result, record) => {
        if (result) {
            deleteSubject(deleteDispatch, { subjectId: record._id });
        }
    };

    useEffect(() => {
        getSubjectList(listDispatch);
        // eslint-disable-next-line
    }, [subjectDeleteState.subjectDeleted]);

    return (
        <>
            <WrapContent
                padding='24px 24px 0'
            >
                <Card
                    title='Subject List'
                >
                    <Table
                        dataSource={subjectListState.subjects}
                        columns={columns}
                        loading={subjectListState.pending}
                        rowKey={(record) => record._id}
                        pagination={subjectListState.pagination}
                    />
                </Card>
            </WrapContent>
        </>
    );
}

export default SubjectList;
