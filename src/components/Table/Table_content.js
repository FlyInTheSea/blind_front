import React, {Component} from "react"
import Load from "../../components/load/load"
import Table_content_view from "../../views/components/Tables/container"
import * as actions from "../../action"


class Table_content extends Component {



    render() {
        const {
            is_fetching,
        } = this.props
        if (is_fetching) {
            return (
                <Load/>
            )
        }

        return (
            <Table_content_view {...this.props} />
        )
    }
}

export default Table_content