import React from "react"
import get_index from "../../components/forms/index/index";
import * as actions from "../../action"


import id from "./id"

const addition_operation = (item) => {
    return [
        {
            name: "佣金",
            url: `/commission/user/${item.id}`
        }
    ]
}

const Index = get_index(id, addition_operation)

export default Index