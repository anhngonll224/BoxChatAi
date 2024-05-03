import React, { useState } from 'react';
import { ChatStyle } from './styled';
import { Input, Form, Row, Col, Image, Avatar, Alert, Spin } from 'antd';
import ChatQuest from '../../services/ChatQuest';

import './style.css'
const HomeChat = () => {
    const [comment, setComment] = useState()
    const [historyComment, setHistoryComment] = useState([])
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false)
    const getListDossierCate = async () => {
        const values = await form.validateFields()
        setComment(values?.question)
        try {
            setLoading(true)


            const res = await ChatQuest.Quest(
                values?.question
            )

            let newData
            newData = [...historyComment, {
                question: values?.question,
                answer: res?.data.answer
            }];
            setHistoryComment(
                newData
            )
            if (!!res?.data.answer) setLoading(false)
            return form.resetFields([`question`])
        } finally {
            setLoading(false)
            return form.resetFields([`question`]);
        }
    }
    return (
        <ChatStyle>
            <Form form={form} layout="vertical" className='background-img'>
                <div className='logo-chat-bot'>
                    <img
                        width={88}
                        height={48}
                        src={require('../../assets/img/logolld.png')}
                    />
                </div>
                <div className="container">
                    <div className='heading-text'>
                        <h1 className="heading-251">Tổng Liên đoàn Lao Động Việt Nam</h1>
                        <div className="hero-sub ai-page">Trợ lý ảo Tổng Liên đoàn</div>
                    </div>
                    <div className="chatbox">

                        <div className="top-bar">
                            {/* <div className="avatar"> */}
                            <p>
                                <Avatar className="avatar" src={<img src={require('../../assets/img/logolld.png')} alt="avatar" />} />
                            </p>
                            {/* </div> */}
                            <div className="name">Trợ lý ảo Tổng Liên đoàn</div>

                        </div>
                        <div className="middle">
                            {/* <Spin spinning={loading}> */}
                            <div className="voldemort">
                                {!!historyComment &&
                                    historyComment.map((item, index) => {
                                        return (
                                            <Row>
                                                {/* bot */}
                                                <Col span={24} className="outgoing">
                                                    <div className="bubble">{item?.question.split('<br />')}</div>

                                                </Col>
                                                {/* user */}
                                                <Col span={24} className="incoming">
                                                    <div className="bubble " >
                                                        {/* <p dangerouslySetInnerHTML={{ __html: item.answer }}></p> */}
                                                        {
                                                            item?.answer.replace(/\n\n/g, '\n').split('\n').slice(0).map((part, index) => (
                                                                <div key={index} >
                                                                    <p dangerouslySetInnerHTML={{ __html: part }} >
                                                                        {console.log('check item : ', part)}

                                                                    </p>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>

                                                </Col>

                                            </Row>
                                        )
                                    })
                                }
                                {loading &&
                                    <div >
                                        <div className="outgoing" style={{ width: '100%' }}>
                                            <div className="bubble">
                                                {comment}
                                            </div>
                                        </div>
                                        <div id="loading-comment" className='loading-comment incoming'>
                                            <div id="loading-bubble" class="grey" style={{ width: '10%' }}>
                                                <div class="spinner">
                                                    <div class="bounce1"></div>
                                                    <div class="bounce2"></div>
                                                    <div class="bounce3"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            {/* </Spin> */}
                        </div>
                        <div className="bottom-bar">
                            <div className="chat">
                                <Form.Item
                                    name="question"
                                >
                                    <Input
                                        disabled={loading}
                                        size="large"
                                        placeholder="Nhập nội dung"
                                    />
                                </Form.Item>
                                <button onClick={() => getListDossierCate()} type="submit"><i className="fas fa-paper-plane" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>

        </ChatStyle >
    );
}

export default HomeChat;
