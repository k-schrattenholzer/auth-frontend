import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userLogin } from '../fetch-utils.js'

export default class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { token } = await userLogin(this.state.email, this.state.password)

        this.props.handleTokenChange(token);

        this.props.history.push('/tasklist');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>login</h3>
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
                    <button>login</button>
                </form>
                <Link to='/signup'>first time here? click to signup</Link>
            </div>
        )
    }
}
