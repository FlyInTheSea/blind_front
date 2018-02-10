import reducer from "./reducer/index"
import {combineReducers} from "redux"
import {reducer as formReducer} from 'redux-form'
import {routerReducer} from "react-router-redux"


const form =
    formReducer.plugin({
        ssss: (state, action) => {   // <----- 'login' is name of form given to reduxForm()
            switch (action.type) {
                case "FEEL_TIRED":
                    console.log(state)
                    return {
                        ...state,
                        values: {
                            ...state.values,
                            [action.name]: undefined // <----- clear password value
                        },
                        fields: {
                            ...state.fields,
                            [action.name]: undefined // <----- clear field state, too (touched, etc.)
                        }
                    }
                default:
                    return state
            }
        }
    })

const root_reducer = combineReducers({
    reducer,
    form,
    router: routerReducer,
})


export const get_forms_by_form_id = (state, id) => {
    return state.form
}


export default root_reducer
