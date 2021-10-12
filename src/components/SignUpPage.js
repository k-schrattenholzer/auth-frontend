import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { userSignUp } from '../fetch-utils.js'

export default class SignUpPage extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const response = await userSignUp(this.state.email, this.state.password);

        console.log(response)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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
                <Link to='/login'>already have an account? login</Link>
            </div>
        )
    }
}
