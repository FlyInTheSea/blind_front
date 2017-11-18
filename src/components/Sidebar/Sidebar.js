import React from 'react';
import {connect} from "react-redux"
import * as actions from "../../action/actions"

import sidebar_view from "../../views/components/sidebar/sidebar"

const sidebar = () => ({
    type:actions.SKELETON_SIDEBAR_ASYNC,
})


const Sidebar = connect(
    state => ({
        sidebar: state.reducer.skeleton.sidebar
    }),
    dispatch =>{
        dispatch(sidebar())

        return {}
    }
)(sidebar_view)


export default Sidebar;
