import { Input, Select } from 'antd';
const Option = Select.Option;

export const gridsCreate = [
    [{
        name: 'name',
        label: 'Subject name',
        component: <Input />,
        rules: [{
            required: true
        }]
    },
    {
        name: 'level',
        label: 'Level',
        component: (
            <Select>
                <Option value="EASY">EASY</Option>
                <Option value="MEDIUM">MEDIUM</Option>
                <Option value="HARD">HARD</Option>
            </Select>
        ),
        rules: [{
            required: true
        }]
    }],
    [{
        name: 'userName',
        label: 'User name',
        component: <Input />,
        rules: [{
            required: true
        }]
    },
    {
        name: 'description',
        label: 'Description',
        component: <Input />,
        rules: [{
            required: true,
        }]
    }],
]

export const gridsEdit = [
    [{
        name: 'firstName',
        label: 'First name',
        component: <Input />,
        rules: [{
            required: true
        }]
    },
    {
        name: 'lastName',
        label: 'Last name',
        component: <Input />,
        rules: [{
            required: true
        }]
    }],
    [{
        name: 'address',
        label: 'Address',
        component: <Input />,
        rules: []
    }],
]
