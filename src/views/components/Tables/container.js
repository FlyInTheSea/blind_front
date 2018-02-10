import React from "react"
import Header from "./header"
import Row from "./row"


const wrap_item = (props, item) => {
    if (!props) {
        return item
    }
    let merge = Object.keys(props).reduce(
        (res, key) => {
            let single = props[key].filter(
                value => value.value === item[key]
            )[0]

            res[key] = single.display_name
            return res
        }
        , {})
    return {
        ...item,
        ...merge
    }
}

export default ({
                    items, ...rest, extra_map, summaries = []
                }) => {
    return (
        <div>

            <h4>
                {
                    summaries.map(
                        ({name, val}) => {
                            return name + " : " + val + "   "
                        }
                    )
                }
            </h4>
            <table className="table table-striped">
                <thead>
                <Header {...rest}  />
                </thead>
                <tbody>
                {
                    // items.ids
                    items.ids.map(
                        (key) => {
                            let item = items.by_id[key]
                            item = wrap_item(extra_map, item)
                            return (
                                <Row item={item} key={item.id} {...rest} />
                            )
                        }
                    )
                }
                </tbody>

            </table>
        </div>
    )
}