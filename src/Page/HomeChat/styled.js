import styled from "styled-components"
export const ChatStyle = styled.div`
 

@import url("https://fonts.googleapis.com/css?family=Lato:400,700");

  display: grid;
  min-height: 100%;



  display: grid;
  /* background: linear-gradient(to bottom left, #4FA5D8 40%, #f9fbff 100%); */
  /* background-image: url("../../assets/img/background-home.jpg"); */
  font-family: "Roboto","Arial",sans-serif;


.logo-chat-bot {
  margin-top: 15px;
  display: flex;
  justify-content: center;
}

.container {
  position: relative;
  margin: 1% auto;
  width: 90%;
  height: 800px ;
}
@media (max-width: 768px){
  .container {
  position: relative;
  margin: 1% auto;
  width: 90%;
  height: 628px;
}
}
.messages {
  position: absolute;
  background: #f9fbff;
  opacity: 0.5;
  width: 30%;
  height: 70%;
  top: 2.5%;
  left: 5%;
  border-radius: 10px 0 0 10px;
  box-shadow: -5px 5px 10px rgba(119, 119, 119, 0.5);
}

/*chat messages */
.people {
  position: absolute;
  list-style-type: none;
  width: 27.2%;
  left: 70px;
  top: 24.7%;
  line-height: 0.7em;
}
.people .title {
  text-transform: uppercase;
  font-size: 0.7em;
  margin-left: 14px;
  letter-spacing: 1px;
  color: #777777;
}
.people .time {
  font-size: 0.3em;
  color: #777777;
  position: absolute;
  right: 10px;
  margin-top: 2px;
}
.people .preview {
  color: #4FA5D8;
  margin-left: 14px;
  font-size: 0.5em;
}

.person {
  padding: 12px 0 12px 12px;
  border-bottom: 1px solid #4FA5D8;
  cursor: pointer;
}
.person:hover {
  background: #f9fbff;
  transition: all 0.3s ease-in-out;
}
[type='text']:focus{
  --tw-ring-color: #e3e3e3;
  border-radius: 10px;
}
.focus {
  background: #f9fbff;
  margin-left: 1px;
}
.voldemort{
  overflow: auto;
  height: 89%;
  margin-top: 20px;
}
@media (min-width: 1536px){
  .container {
      max-width: 1536px;
      height: 952px;
  }
  .bottom-bar{
    bottom: 27px !important;
  }
}
.profile {
  position: absolute;
  left: 16%;
  top: 7%;
}

.name2 {
  position: absolute;
  top: 50px;
  left: 2px;
  text-transform: uppercase;
  color: #4FA5D8;
  font-size: 0.8em;
  letter-spacing: 2px;
  font-weight: 500;
}
.hero-sub.ai-page {
    width: auto;
    margin-bottom: 10px;
    font-size: 27px;
    line-height: 30px;
    font-weight: 600;
}
.heading-text{
  text-align: center;
}
.email {
  color: #f9fbff;
  font-size: 0.5em;
  margin-left: -30px;
  margin-top: 2px;
}
.heading-251{
    color: #fff;
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 33px;
    font-weight: 600;
    line-height: 45px;
}
.chatbox {
  margin-top: 4%;
  position: absolute;
  /* left: 35%; */
  height: 75%;
  width: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 15px rgba(119, 119, 119, 0.5);
}

.top-bar {
  width: 100%;
  height: 60px;
  background: #f9fbff;
  border-radius: 10px 10px 0 0;
}

.avatar {
  width: 35px;
  height: 35px;
  /* background: linear-gradient(to bottom left, #4FA5D8 20%, #4FA5D8 100%); */
  border-radius: 50%;
  position: absolute;
  top: 11px;
  left: 15px;
}
.avatar p {
  color: #f9fbff;
  margin: 7px 12px;
}

.name {
  position: absolute;
  top: 18px;
  /* text-transform: uppercase; */
  color: #777777;
  font-size: 1.1em;
  /* letter-spacing: 2px; */
  font-weight: 500;
  left: 60px;
}

.menu {
  position: absolute;
  right: 10px;
  top: 20px;
  width: 10px;
  height: 20px;
  cursor: pointer;
}
.menu:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in;
}

.icons {
  position: absolute;
  color: #4FA5D8;
  padding: 10px;
  top: 5px;
  right: 21px;
  cursor: pointer;
}
.icons .fas {
  padding: 5px;
  opacity: 0.8;
}
.icons .fas:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in;
}

.dots {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #4FA5D8;
  box-shadow: 0px 7px 0px #4FA5D8, 0px 14px 0px #4FA5D8;
}

.middle {
  overflow: auto;
  position: absolute;
  background: #f9fbff;
  width: 100%;
  opacity: 0.85;
  top: 60px;
  height: 80%;
}

.incoming {
  /* position: absolute; */
  width: 50%;
  height: 100%;
  padding-left: 20px;
}
.bubble{
  width: 60%;
}
.incoming .bubble {
  background: #6f82bb;
}

.typing {
  position: absolute;
  top: 67%;
  left: 20px;
}
.typing .bubble {
  background: #eaeaea;
  padding: 8px 13px 9px 13px;
}

.ellipsis {
  width: 5px;
  height: 5px;
  display: inline-block;
  background: #b7b7b7;
  border-radius: 50%;
  animation: bounce 1.3s linear infinite;
}

.one {
  animation-delay: 0.6s;
}

.two {
  animation-delay: 0.5s;
}

.three {
  animation-delay: 0.8s;
}

.bubble {
  position: relative;
  display: inline-block;
  margin-bottom: 5px;
  color: #f9fbff;
  font-size: 18px;
  padding: 10px 10px 10px 12px;
  border-radius: 20px;
}

.lower {
  margin-top: 45px;
}

.outgoing {
  /* position: absolute; */
  padding-right: 20px;
  /* right: 0;
  top: 15%; */
  width: 50%;
  height: 100%;
  margin-bottom: 30px;
}
.outgoing .bubble {
  background: #365ed5;
  float: right;
}

.bottom-bar {
  position: absolute;
  width: 100%;
  /* height: 55px; */
  bottom: 5px;
  background: #f9fbff;
  border-radius: 0 0 10px 10px;
}

.left {
  left: 0px;
}

input {
  padding: 7px;
  width: 74%;
  left: 5%;
  position: absolute;
  border: 0;
  top: 13px;
  background: #f9fbff;
  color: #4FA5D8;
}

input::placeholder {
  color: #4FA5D8;
}

input:focus {
  color: #777777;
  outline: 0;
}

button {
  position: absolute;
  border: 0;
  font-size: 1em;
  color: #4FA5D8;
  top: 19px;
  opacity: 0.8;
  right: 17px;
  cursor: pointer;
  outline: 0;
}
button:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
  color: #4FA5D8;
}

@keyframes bounce {
  30% {
    transform: translateY(-2px);
  }
  60% {
    transform: translateY(0px);
  }
  80% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0px);
    opacity: 0.5;
  }
}


`


