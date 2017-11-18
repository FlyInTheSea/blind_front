import React from "react"

let Load_more = ({
                     load_more,
                     page
                 }) => {
    return (
        <button className="btn btn-block btn-outline-primary" onClick={
            () => {
                load_more(page)
            }
        }>
            更多
        </button>

    )
}

export default Load_more