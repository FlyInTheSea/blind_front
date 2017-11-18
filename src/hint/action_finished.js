import {toast} from "react-toastify"

export const error = (status_code, message = "提交失败　失败信息:") => toast.error(message + status_code)

export const success = (message = "提交成功") => toast(message)


export const waiting = (message = "提交中") => toast.info(message)
