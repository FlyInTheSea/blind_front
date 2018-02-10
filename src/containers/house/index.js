import React from "react"
import get_index from "../../components/forms/index/index";
import * as actions from "../../action"


import id from "./id"


const addition_operation = (item) => {

    let print_link = {
        name: "打印凭据",
        url: `/fund/house/${item.id}`,
        style: {
            color: "blue"
        }

    }
    switch (item.status) {
        case 1:
            return []
            break
        case 2:
            return [
                {
                    name: "认购中",
                    url: `/house/${item.id}/subscribe`
                },
            ]
            break
        case 3:
            return [
                {
                    name: "待签约",
                    url: `/contract/${item.id}`
                },
            ]
            break
        case 4:
            return [
                {
                    name: "回款中",
                    url: `/house/${item.id}/payment`
                },
            ]

            break
        case 0:
            return [
                {
                    name: "已结清款项",
                    url: ``,
                    style: {
                        color: "grey"
                    }
                },
            ]
            break
        default:
            return []

    }

}

const Index = get_index(id, addition_operation)

export default Index