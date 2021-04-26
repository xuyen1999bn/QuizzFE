import React from "react";
import { Form } from "antd";
const FormItem = Form.Item;
export default function FormInput(props) {
    const { name, label, rules, component: Component, dependencies } = props;
    return (
        <>
            <FormItem
                labelAlign='right'
                labelCol={{ md: 6, sm: 8, xs: 24 }}
                label={label}
                name={name}
                rules={rules}
                dependencies={dependencies}
            >
                {Component}
            </FormItem>
        </>
    );
}
