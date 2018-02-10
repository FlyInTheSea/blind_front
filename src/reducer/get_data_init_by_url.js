import * as actions from "../action/actions"


const data = (state = {}, {type, url, res}) => {
    switch (type) {
        case actions.GET_DATA_INIT_BY_URL:
            return {
                ...state,
                [url]: res
            }
        default:
            return state
    }
}


// const config = combineReducers({
//     config
// })

export default data

export const get_data= (data, url) => {
    return data[url]
}