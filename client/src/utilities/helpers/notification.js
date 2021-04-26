
import { Modal } from "antd";
import {
  ExclamationCircleOutlined
} from '@ant-design/icons';

export const showDeleteConfirm = (content, metaData, callback) => {
  Modal.confirm({
    title: 'Are you sure delete row?',
    icon: <ExclamationCircleOutlined />,
    content: content,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: () => callback(true, metaData),
    onCancel: () => callback(false, metaData),
  });
}

export const showActiveConfirm = (content, metaData, callback) => {
  Modal.confirm({
    title: 'Are you sure active question?',
    icon: <ExclamationCircleOutlined />,
    content: content,
    okText: 'Yes',
    okType: 'danger',
    cancelText: 'No',
    onOk: () => callback(true, metaData),
    onCancel: () => callback(false, metaData),
  });
}

export const capitalizing = (str) => {
  return str
    .split("-")
    .map((element) => element[0].toUpperCase().concat(element.slice(1)))
    .join(" ");
};