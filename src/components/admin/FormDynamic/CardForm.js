import React from "react";
import { Card } from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import FormDynamic from "./FormDynamic";
import { ButtonBack } from "../../../utilities/styledComponent/FormDynamicStyled/FormDynamicStyled";
import { WrapContent } from "../../../utilities/styledComponent/_shared";

export default function CardWithFlex({
    grids,
    titleForm,
    validateMessages,
    onFinish,
    loading,
    callbackReset,
    form,
    onBackToPage,
    backToPage
}) {
    return (
        <Card style={{ minWidth: 400 }}
            headStyle={{
                paddingLeft: 0,
                position: "relative"
            }}
            title={
                <>
                    {backToPage &&
                        <ButtonBack
                            onClick={() => onBackToPage()}
                            icon={<CaretLeftOutlined />}
                        >
                        </ButtonBack>
                    }
                    <WrapContent
                        padding='0 40px 0'
                    >
                        {titleForm}
                    </WrapContent>
                </>
            } >
            <FormDynamic
                grids={grids}
                validateMessages={validateMessages}
                onFinish={onFinish}
                loading={loading}
                callbackReset={callbackReset}
                form={form}
            />
        </Card>
    );
}
