import React, { useEffect, useState } from 'react';
import ActivityList from '../../../components/public/ActivityList/ActivityList';
import { axiosInstance } from '../../../configs/axiosInstance';

function SubjectRecent() {
    const [activityList, setActivityList] = useState({
        result: [],
        errorMsg: "",
        loading: false,
    });
    useEffect(() => {
        axiosInstance.get('/user/activities').then((res) => {
            if (res?.status <= 300 && res?.status >= 200) {
                setActivityList({
                    result: res.data.activities,
                    loading: false,
                    errorMsg: ""
                });
            } else {
                setActivityList({
                    result: [],
                    loading: false,
                    errorMsg: "Cannot get activity list"
                });
            }
        })
    }, []);
    return (
        <>
            <ActivityList
                title='Subject Recent'
                activities={activityList.result}
                loading={activityList.loading}
                errorMsg={activityList.errorMsg}
            />
        </>
    );
}

export default SubjectRecent;