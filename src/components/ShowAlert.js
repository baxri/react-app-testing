import React, { Component } from 'react'

export default class extends Component {

    constructor(props) {
        super(props)

        this.state = {
            showAlert: false,
        }
    }


    render() {

        const { showAlert } = this.state;

        return (
            <div>
                {showAlert && <div id="alert">Button is clicked!</div>}
                <button id="button" onClick={() => this.setState({ showAlert: true })}>Click here</button>
            </div>
        )
    }
}
