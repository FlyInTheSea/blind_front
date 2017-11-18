import React, {Component} from 'react';
import {connect} from "react-redux"

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <a href="http://coreui.io">CoreUI</a> &copy; 2017 creativeLabs.
                <span className="float-right">Powered by <a href="http://coreui.io">CoreUI</a></span>
                <button className="btn"

                        onClick={
                            () => {
                            }
                        }
                >console store
                </button>

            </footer>
        )
    }
}

Footer = connect(state => {

        return {
            state
        }
    }, null
)
(Footer)

export default Footer;
