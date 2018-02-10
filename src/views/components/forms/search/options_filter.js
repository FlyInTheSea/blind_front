import React, {Component} from 'react';
import {connect} from "react-redux"
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import * as actions_creator from "../../../../actions_creator"
import * as reducer from "../../../../reducer"

const Options_filter_view = ({
                                 handle_anchorEl, handleClose, search_entity, options_filter_click,handleChange
                             }) => {
    const {
        anchorEl, options_hidden = [], open = false, search_options
    } = search_entity

    return (
        <div>
            <RaisedButton
                onClick={
                    (event) => {
                        event.preventDefault();
                        handle_anchorEl(event.currentTarget)
                        handleChange(open)
                    }
                }
                label="筛选"
                disabled={!options_hidden.length}
            />
            <Popover
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={handleClose}
            >
                <Menu>
                    {
                        options_hidden.map(
                            ({name_alias}, index) => {
                                return (
                                    <MenuItem primaryText={name_alias} key={index} onClick={
                                        () => {
                                            options_filter_click(
                                                index, search_options, options_hidden
                                            )
                                        }
                                    }/>
                                )
                            }
                        )
                    }
                </Menu>
            </Popover>
        </div>
    )
}


const Options_filter = connect(
    (state, {id}) => {
        return {
            search_entity: reducer.get_entity(state, id)
        }
    },
    (dispatch, {id}) => {

        return {

            handleOpen() {
                dispatch(actions_creator.entity(id, "open", true))
            },
            handleClose() {
                dispatch(actions_creator.entity(id, "open", false))
            },
            handleChange(open) {
                dispatch(actions_creator.entity(id, "open", !open))
            },
            handle_anchorEl(val) {
                dispatch(actions_creator.entity(id, "anchorEl", val))
            },
            options_filter_click(index, search_options, options_hidden) {
                let options_hidden_copy = [...options_hidden],
                    search_options_copy = search_options,
                    changed = options_hidden_copy.pop(index)
                search_options_copy.push(changed)
                dispatch(actions_creator.entity(id, "search_options", search_options_copy))
                dispatch(actions_creator.entity(id, "options_hidden", options_hidden_copy))
                if (options_hidden_copy.length === 0) {
                    console.log(options_hidden_copy)
                    dispatch(actions_creator.entity(id, "open", false))
                }

            },

        }
    }
)(Options_filter_view)

export default Options_filter
