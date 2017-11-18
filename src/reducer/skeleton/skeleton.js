import {combineReducers} from "redux"
import * as actions from "../../action/actions"
import fields from "./fields"
import sidebar from "./sidebar"

const skeleton = combineReducers({
    sidebar,
    fields
})

export default skeleton


export const get_fields = (state,id)=>{

    return state.fields[id]
}

