import React from "react"
import {NavLink} from 'react-router-dom'
import uuid from "uuid"

const Sidebar = ({
                     sidebar,
                 }) => {

    let current_path = window.location.pathname.slice(1, window.location.pathname.indexOf("/", 1))

    let todo = [[
        "顾客", "customer",
        "顾客详情",
        "customer_info"
        , "顾客评级", "customer_level"
    ]

    ]

    let sider_bar = [
        {
            name: "客户",
            items: [
                {
                    name: "客户列表",
                    url: "/customer/items",
                },
            ],
        },
        {
            name: "项目",
            items: [
                {
                    name: "小区",
                    items: [
                        {
                            name: "小区添加",
                            url: "/community/add",
                        },
                        {
                            name: "小区列表",
                            url: "/community/items",
                        }
                    ]
                },
                {
                    name: "房间",
                    items: [
                        {
                            name: "房间添加",
                            url: "/house/add",
                        },
                        {
                            name: "房间列表",
                            url: "/house/items",
                        }
                    ]
                },
                {
                    name: "项目管理人员",
                    items: [
                        {
                            name: "项目管理人员添加",
                            url: "/community_role/add",
                        },
                        {
                            name: "项目管理人员列表",
                            url: "/community_role/items",
                        }
                    ]
                },
                {
                    name: "项目直接销售",
                    items: [
                        {
                            name: "项目直接销售添加",
                            url: "/community_seller/add",
                        },
                        {
                            name: "项目直接销售列表",
                            url: "/community_seller/items",
                        }
                    ]
                },
                {
                    name: "项目推广渠道",
                    items: [
                        {
                            name: "项目推广渠道添加",
                            url: "/channel/add",
                        },
                        {
                            name: "项目推广渠道列表",
                            url: "/channel/items",
                        }
                    ]
                }
            ],
        },
        {
            name: "合同与文件",
            items: [
                {
                    name: "合同列表",
                    url: "/contract/items",
                },
                {

                    name: "文件",
                    items: [
                        {
                            name: "文件添加",
                            url: "/upload_file/add",
                        },
                        {
                            name: "文件列表",
                            url: "/upload_file/items",
                        }
                    ]
                }
            ],
        },


        {
            name: "系统设置",
            items: [
                {

                    name: "配置名称",
                    items: [
                        {
                            name: "配置名称添加",
                            url: "/config_transformation/add",
                        },
                        {
                            name: "配置名称列表",
                            url: "/config_transformation/items",
                        },
                    ]
                },
                {

                    name: "角色",
                    items: [
                        {
                            name: "角色添加",
                            url: "/role/add",
                        },
                        {
                            name: "角色列表",
                            url: "/role/items",
                        },
                    ]
                },
                {

                    name: "权限",
                    items: [
                        {
                            name: "权限添加",
                            url: "/permission/add",
                        },
                        {
                            name: "权限列表",
                            url: "/permission/items",
                        },
                    ]
                },
                {

                    name: "角色权限",
                    items: [
                        {
                            name: "角色权限添加",
                            url: "/permission_role/add",
                        },
                        {
                            name: "角色权限列表",
                            url: "/permission_role/items",
                        },
                    ]
                }
            ],
        },
        {
            name: "员工",
            items: [
                {
                    name: "员工添加",
                    url: "/user/add",
                },
                {
                    name: "员工列表",
                    url: "/user/items",
                }
            ],
        },

    ]

    const Side_bar_item = ({item}) => {
        let {name, url, items} = item
        if (url) {
            return (
                <li
                    key={uuid.v4()}
                    className="nav-item"
                >
                    <NavLink to={url}
                             className="nav-link"
                             activeClassName="active">
                        <i className="icon-star"></i>
                        {name}
                    </NavLink>
                </li>
            )
        } else {
            return (
                <li
                    className={
                        item.name === current_path ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
                    }
                >
                    <a className="nav-link nav-dropdown-toggle" href="#" onClick={
                        (e) => {
                            e.preventDefault();
                            e.target.parentElement.classList.toggle('open');
                        }
                    }>
                        <i className="icon-star"></i>
                        {name}
                    </a>
                    <ul className="nav">
                        {
                            items.map(
                                (item, key) => {
                                    return (
                                        <Side_bar_item item={item} key={key}/>
                                    )
                                }
                            )
                        }
                    </ul>
                </li>
            )
        }
    }

    return (
        <div className="sidebar">
            <nav className="sidebar-nav">
                <ul className="nav">
                    {
                        sider_bar.map(
                            (item) => {
                                return (
                                    <li
                                        key={uuid.v4()}
                                        className={
                                            item.name === current_path ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown'
                                        }>
                                        <a className="nav-link nav-dropdown-toggle" href="#" onClick={
                                            (e) => {
                                                e.preventDefault();
                                                e.target.parentElement.classList.toggle('open');
                                            }
                                        }>
                                            <i className="icon-star"></i>
                                            {item.name}
                                        </a>
                                        <ul className="nav-dropdown-items">
                                            {
                                                item.items.map(
                                                    (item, key) => {
                                                        return (
                                                            <Side_bar_item item={item} key={key}/>
                                                        )
                                                    }
                                                )
                                            }
                                        </ul>
                                    </li>
                                )
                            }
                        )
                    }
                </ul>

            </nav>
        </div>
    )
}

export default Sidebar