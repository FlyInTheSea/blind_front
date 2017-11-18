import {toast} from "react-toastify"


export const dismiss = (handle) => {
    toast.dismiss(handle)
}


export const add_info = () => {
    return toast.info("正在提交")
}
export const add_error = (message) => {
    toast("加載失敗　失败信息：" + message)
}
export const add_success = () => {
    toast("加載成功")
}


export const index_error = (message) => {
    toast("加載失敗　失败信息：" + message)
}
export const index_success = () => {
    toast("加載成功")
}


export const index_info = () => {
    return toast.info("加載中")
}


export const update_error = (message) => {
    toast("修改失敗　失败信息：" + message)
}
export const update_success = () => {
    toast("修改成功")
}
export const update_info = () => {
    return toast.info("提交中")
}


export const del_error = (message) => {
    toast("刪除失败　失败信息：" + message)
}
export const del_success = () => {
    toast("刪除成功")
}
export const del_info = () => {
    return toast.info("刪除中")
}


export const login_info = () => {
    return toast.info("登录中")
}

export const login_error = (message) => {
    return toast.error("加載失敗　失败信息：" + message)
}
export const login_success= (message) => {
    return toast(message)
}
