
visitor_data_structure = {
    name: "姓名",
    city: "城市",
    connect_phone: "联系电话",
    desert_jobs: "是否离职",
    kujiale: "酷家乐开通",
    register_phone: "注册手机号",
    status: "设计师状态"
}

visitor_data_structure.edit = "编辑"


let examples = []

for (let i = 0; i < 10; ++i) {
    examples.push({
        name: "杨益民",
        city: "北京",
        connect_phone: 13121341474,
        desert_jobs: "在职",
        kujiale: "开通",
        register_phone: 13121341474,
        status: "审核通过"
    })
}
{
    examples.map(
        (example, index) => {
            return (

                <tr key={index}>
                    {
                        Object.keys(example).map(
                            (key, i) => {
                                return (
                                    <td key={i}>
                                        {example[key]}
                                    </td>
                                )
                            }
                        )

                    }
                    <td>

                        <NavLink className="badge badge-success"
                                 to={"/table_structure/edit/" + example.id}>
                            edit
                        </NavLink>
                        {" "}
                        <span className="badge badge-danger">
                                            delete
                                            </span>
                    </td>
                </tr>
            )
        }
    )
}