import axios from "axios"
import http from "../index"
import {
  apiQuest,
} from "./urls"
// import QueryString from "qs"

const Quest = question => http.get(apiQuest, { params: { question } })
const ChatQuest = {
  Quest,
}
export default ChatQuest
