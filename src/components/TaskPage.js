import React, { Component } from 'react'
import { addTask, completeTask, getTaskList } from '../fetch-utils.js'

export default class TaskPage extends Component {
    state={
        tasks: [],
        description: ''
    }

    componentDidMount = async() => {
        const tasks = await getTaskList(this.props.token);

        this.setState({ tasks })
    }

    handleSubmit = async e => {
        const { description } = this.state;
        const { token } = this.props;

        e.preventDefault();

        await addTask(description, token)

        const tasks = await getTaskList(token)
        console.log(tasks)
        this.setState({ tasks, description: '' })
    }
    render() {
        const { description, tasks } = this.state;
        const { token } = this.props;

        console.log(this.state.tasks)
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}>
                    <input
                        value={description}
                        onChange={e => this.setState({ description: e.target.value })}></input>
                        <button>Add Task</button>
                </form>
                <div>
                    {tasks
                    .map(({ id, status, task }) => <div
                    key={id}
                    onClick={async() => {
                        await completeTask( id, !status, token)
                        const fetchedList = await getTaskList(token)

                        this.setState({ tasks: fetchedList })
                        }}
                        className={status ? 'complete' : 'incomplete'}>
                            {task}</div>)}
                </div>
            </div>
        )
    }
}
