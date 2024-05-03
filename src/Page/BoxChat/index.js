import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Widget, addResponseMessage, addUserMessage, toggleMsgLoader } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { ChatBotStyled } from './styled';

const BoxChat = () => {
    const baseURL = "https://champagne-heading-enrollment-jamaica.trycloudflare.com/api/qa/";
    const [loading, setLoading] = useState(false)

    const handleNewUserMessage = async (newMessage) => {
        try {
            setLoading(true)
            toggleMsgLoader()
            const res = await axios.get(baseURL + '?question=' + newMessage)
            addResponseMessage("Bạn đã nói: " + res?.data.answer);
        } finally {
            setLoading(false)
            toggleMsgLoader()
        }
    };
    useEffect(() => {
        addResponseMessage('Chúng tôi có thể hỗ trợ gì cho bạn?');
    }, []);
    return (
        <ChatBotStyled>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                title="Chat Bot"
                subtitle="Hỗ trợ trực tuyến"
                typing={loading}
                showCloseButton={true}
                fullScreenMode={false}
                autofocus={true}
                badge={0}
                // profileAvatar={logo}
                showQuickButtons={false}
            />
            {loading && <p style={{ textAlign: 'center', fontStyle: 'italic' }}>...</p>}
        </ChatBotStyled>
    );
}

export default BoxChat;
