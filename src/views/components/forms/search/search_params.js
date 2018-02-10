import React from 'react';

import Options from "./options"
import Options_filter from "./options_filter"
import validate from "../../../../valid/channel";


const Search_params = ({extra_columns_info, user_handle, id,validate}) => {
    return (
        <div>
            <Options_filter id={id}/>
            <Options id={id} extra_columns_info={extra_columns_info} user_handle={user_handle} />
        </div>
    )
}


export default Search_params;