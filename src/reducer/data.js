import * as actions from "../action/actions"
import {combineReducers} from "redux"

const get = (state, action) => {

    if (state[action.id] && !action.refresh) {

        return [...new Set([
            ...state[action.id],
            ...action.res.result
        ])]
    } else {
        return [
            ...new Set(
                [
                    ...action.res.result
                ]
            )
        ]
    }
}


const ids = (state = {}, action) => {

    switch (action.type) {

        case actions.INDEX:
            return {
                ...state,
                [action.id]:
                    [
                        ...get(state, action)
                    ]
            }
            break
        case actions.DEL:
            return {
                ...state,
                [action.id]: state[action.id].filter(id => action.del_id !== id)
            }
            break
        default:
            return state
    }

}


const by_id = (state = {}, action) => {
    switch (action.type) {
        case actions.INDEX:
            return {
                ...state,
                [action.id]:
                    {
                        ...state[action.id],
                        ...action.res.entities.item
                    }
            }
            break
        default:
            return state
    }
}


const last_page = (state = {}, action) => {

    switch (action.type) {
        case actions.INDEX:
            let result = true
            if (action.last_page) {
                result = !(action.last_page > (action.page - 1))
            }
            return {
                ...state,
                [action.id]: result
            }
            break
        default:
            return state
        // }
    }
}
const page = (state = {}, action) => {

    switch (action.type) {
        case actions.INDEX:
            return {
                ...state,
                [action.id]: action.page
            }
            break
        default:
            return state
    }
}

const add_instance = (state = {}, action) => {

    switch (action.type) {
        case actions.ADD:
            return {
                ...state,
                [action.id]: action.res
            }
            break
        default:
            return state
    }
}
const edit_instance = (state = {}, action) => {

    switch (action.type) {
        case actions.EDIT:
            return {
                ...state,
                [action.id]: action.res
            }
            break
        default:
            return state
    }
}

const summaries = (state = {}, action) => {
    switch (action.type) {
        case actions.SUMMARIES:
            return {
                ...state,
                [action.id]: action.res
            }
            break
        default:
            return state
    }
}


const data = combineReducers({
    ids,
    by_id,
    page,
    last_page,
    edit_instance,
    add_instance,
    summaries,
})


export const get_ended_page = (state, id) => {
    return state.last_page[id] || 0
}

export const get_start = (state, id) => {
    return state.page[id] || 0
}

//edit edit_instance
export const get_edit_instance = (state, id) => {
    return state.edit_instance[id] || {}
}
export const get_add_instance = (state, id) => {
    return state.add_instance[id] || {}
}

export const get_ids_and_by_id = (state, id) => {
    return {
        ids: state.ids[id] || [],
        by_id: state.by_id[id] || {}
    }
}


export const get_summaries = (state, id) => {
    return state.summaries[id] || {}
}

export default data
