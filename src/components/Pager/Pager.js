import React from "react"
import {NavLink} from "react-router-dom"

const Pager = ({
                   Pager_data: {
                       urls: urls,
                       prev: prev,
                       next:next
                   }
               }) => (
    <ul className="pagination">
        <li className="page-item">
            <NavLink className="page-link" to={prev.link}>
                Prev
            </NavLink>
        </li>

        {
            urls.map(
                item => (
                    <li className={"page-item " + (item.cur ? "active" : "")}>
                        <NavLink className="page-link" to={item.link}>
                            {
                                item.num
                            }
                        </NavLink>
                    </li>
                )
            )
        }

        <li className="page-item">
            <NavLink className="page-link" to={next.link}>Next</NavLink>
        </li>
    </ul>
)


export default Pager