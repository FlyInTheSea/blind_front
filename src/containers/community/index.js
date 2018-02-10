import React from "react"
import get_index from "../../components/forms/index/index";
import * as actions from "../../action"


import id from "./id"


const addition_operation = (item) => {

    return [
        {
            name: "统计",
            url: `/overview/community/${item.id}`
        },
        {
            name: "批量上传房屋信息",
            url: `/house_batch_upload/community/${item.id}`
        },
        {
            name: "认购书模板",
            url: `/community/${item.id}/contract_template/add`
        },
    ]

}
const Index = get_index(id, addition_operation)

export default Index