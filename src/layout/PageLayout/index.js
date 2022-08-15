import React, { useEffect } from "react";
import axios from "axios";
import { ROOT_API } from "../../constant/api";
import './page_layout.css';
import { Row, Col, Input, Avatar } from "antd";
import { RiNotification3Fill } from 'react-icons/ri';

const PageLayout = ({ children }) => {
    useEffect(() => {
        // let userJSON = window.localStorage.getItem("user");
        // if (userJSON && userJSON != "") {
        //     let userData = JSON.parse(userJSON);
        //     if (moment(userData.expiredDate) < moment()) {
        //         router.push("/signin").then((r) => r);
        //     } else if (user && isUnRestrictedRoute(router.pathname)) {
        //         router.push("/main/dashboard/crm").then((r) => r);
        //     }

        axios.defaults.baseURL = ROOT_API;
        axios.interceptors.response.use(
            response => {
                return response;
            },
            // error => {
            //     if (error.response?.status === 403) {
            //         // openNotificationWithIcon('error', 'Hệ thống', 'Bạn không có quyền truy cập chức năng này');
            //         router.push('/exception/403');
            //     }
            // }
        );

        // } else {
        //     router.push("/signin").then((r) => r);
        // }
    }, []);

    return (
        <React.Fragment>
            <div className="page-header">
                <Row>
                    <Col span={6}>
                        <Input placeholder="Tìm kiếm" />
                    </Col>
                    <Col span={12}></Col>
                    <Col span={6}>
                        <div className="header-col-3">
                            <div>
                                <RiNotification3Fill />
                            </div>
                            <div>
                                <Avatar />
                            </div>
                        </div>

                    </Col>
                </Row>
            </div>
            {children}
        </React.Fragment>
    );
}

export default PageLayout;