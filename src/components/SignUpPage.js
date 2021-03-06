import React, { Component } from 'react'
import { userSignUp } from '../fetch-utils.js'

export default class SignUpPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { token } = await userSignUp(this.state.email, this.state.password)

        this.props.handleTokenChange(token);

        this.props.history.push('/tasklist');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>sign-up</h3>
                    <label>
                        email:
                        <input 
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                            type="email"/>
                    </label>
                    <label>
                        password:
                        <input 
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                            type="password"/>
                    </label>
                    <button>sign up</button>
                </form>
            </div>
        )
    }
}
