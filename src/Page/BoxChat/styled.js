import styled from "styled-components"

export const ChatBotStyled = styled.div`
.rcw-launcher{
    align-items: center;
    justify-content: center;
    display: flex;
}
/* button hiển thị icon chat */
button.rcw-picker-btn {
    display: none;
}
.rcw-sender button {
    background-color: unset;
    margin-left: 10px;
}
/* end */
/* design input chat */
.rcw-sender{
  align-items: center;
  width: 100%;
}
.rcw-new-message{
  width: 90%;
  background-color: unset;
}
/* end */
/* css color background */
.rcw-conversation-container > .rcw-header {
  background-color: #334588;
}
/* màu nền chữ Ai */
.rcw-message > .rcw-response {
  /* background-color: black;
  color: white; */
}
/* nền user */
.rcw-client .rcw-message-text{
  background-color: #334588;
  color: white;
}
/* end */
/* nền icon open end close */
.rcw-launcher{
  background-color: #355e81;
}
/* end */
/* header chatbot */
.rcw-conversation-container .rcw-header{
  padding: 0px 0 15px;
}
`