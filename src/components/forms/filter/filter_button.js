import React, {Component} from "react"
import {RaisedButton, Popover, Menu, MenuItem} from "material-ui"

class Filter_button extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap = (event) => {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>
                <RaisedButton
                    onClick={this.handleTouchTap}
                    label="todo"
                />
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    targetOrigin={{horizontal: 'left', vertical: 'top'}}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh"/>
                        <MenuItem primaryText="Help &amp; feedback"/>
                        <MenuItem primaryText="Settings"/>
                        <MenuItem primaryText="Sign out"/>
                    </Menu>
                </Popover>
            </div>
        );
    }
}

export default Filter_button