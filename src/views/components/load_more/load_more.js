import React from "react"

let Load_more = ({
                     load_more,
                     page, query_params,
                     if_ended_page
                 }) => {
    if (if_ended_page) {
        return (
            <button
                className="btn btn-block btn-outline-danger"
                disabled={
                    true
                }
            >
                没有更多了
            </button>
        )
    }
    return (

        <button
            className="btn btn-block btn-outline-primary "
            onClick={
                () => {
                    load_more(page, query_params)
                }
            }>
            更多
        </button>

    )
}

export default Load_more