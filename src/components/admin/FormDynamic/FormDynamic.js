import React from "react";
import FormInput from "./FormInput";
import { Button, Form } from "antd";
import { ButtonRow, FlexCol, FlexRow } from '../../../utilities/styledComponent/FormDynamicStyled/FormDynamicStyled';

const FormItem = Form.Item;

export default function FormDynamic({
    grids,
    validateMessages,
    onFinish,
    loading,
    callbackReset,
    form
}) {
    const onReset = () => {
        form.resetFields();
        if (typeof (callbackReset) === 'function')
            callbackReset(form);
    }
    return (
        <>
            <Form
                validateMessages={validateMessages}
                onFinish={onFinish}
                form={form}
            >
                {
                    grids.map((cols, indexRow) => {
                        return (
                            <FlexRow key={indexRow}>
                                {
                                    cols.map((col, indexCol) => {
                                        return (
                                            <FlexCol key={indexCol}>
                                                <FormInput name={col.name} {...col} />
                                            </FlexCol>
                                        )
                                    })
                                }
                            </FlexRow>
                        )
                    })
                }
                <FormItem>
                    <ButtonRow>
                        <Button onClick={onReset}> Reset </Button>
                        <Button type="primary" htmlType='submit' loading={loading}> Submit </Button>
                    </ButtonRow>
                </FormItem>
            </Form>
        </>
    );
}
