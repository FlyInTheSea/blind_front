import {all} from "redux-saga/effects"
import table_add from "./saga/crud/add"
import skeleton_sidebar from "./saga/skeleton/sidebar"
import skeleton_fields from "./saga/skeleton/fields"
import index from "./saga/crud/index"
import del from "./saga/crud/del"
import edit from "./saga/crud/edit"
import update from "./saga/crud/update"
import config from "./saga/config"
import login from "./saga/login"
import url_specify from "./saga/url_specify"
import url_specify_raw_data from "./saga/url_specify_raw_data"
import option from "./saga/option"
import upload_file from "./saga/upload_file"

export default function* rootSaga() {

    yield all([
        table_add(),
        skeleton_sidebar(),
        skeleton_fields(),
        index(),
        del(),
        edit(),
        update(),
        config(),
        login(),
        url_specify(),
        url_specify_raw_data(),
        option(),
        upload_file(),
    ])
}

