import React from "react"
import {Route} from "react-router-dom"

import District from "./chart/district"
import sex from "./chart/sex"
import family from "./chart/family"
import channel from "./chart/channel"
import house_type from "./chart/house_type"
import motive from "./chart/motive"
import fund from "./chart/fund"
import fund_with_data_zoom from "./chart/fund_with_data_zoom"

import hold_motive from "./chart/hold_motive"
import hold_district from "./chart/hold_district"
import hold_sex from "./chart/hold_sex"
import hold_house_type from "./chart/hold_house_type"
import hold_family from "./chart/hold_family"
import hold_channel from "./chart/hold_channel"

const Content = () => {
    return (
        <div>
            <Route path="/overview/community/:community(\d+)" component={fund}/>
            <Route path="/overview/community/:community(\d+)" component={fund_with_data_zoom}/>
            <Route path="/overview/community/:community(\d+)" component={District}/>
            <Route path="/overview/community/:community(\d+)" component={sex}/>
            <Route path="/overview/community/:community(\d+)" component={family}/>
            <Route path="/overview/community/:community(\d+)" component={channel}/>
            <Route path="/overview/community/:community(\d+)" component={house_type}/>
            <Route path="/overview/community/:community(\d+)" component={motive}/>

            <Route path="/overview/community/:community(\d+)" component={hold_channel}/>
            <Route path="/overview/community/:community(\d+)" component={hold_family}/>
            <Route path="/overview/community/:community(\d+)" component={hold_house_type}/>
            <Route path="/overview/community/:community(\d+)" component={hold_sex}/>
            <Route path="/overview/community/:community(\d+)" component={hold_motive}/>
            <Route path="/overview/community/:community(\d+)" component={hold_district}/>
        </div>
    )
}

export default Content