import axios from "axios"
import http from "../index"
import {
  apiLogin,
  apiLogout,
} from "./urls"
import QueryString from "qs"

const login = body => http.post(apiLogin, body)
const logout = () => http.get(apiLogout)
const AuthService = {
  logout,
  login,

}
export default AuthService
