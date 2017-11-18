
import map from "../table_map"


export const get_edit_url = (table,id)=>{
    return "/" + map[table]+ "/" + "edit" + "/" + id
}






