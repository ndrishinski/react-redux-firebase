import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import { createProject } from '../../store/actions/projectActions'

class CreateProject extends React.Component {
    state = {
        title: '',
        content: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state)
        this.props.history.push('/')
    }

    render() {
        const {auth} = this.props

        if (!auth.uid) return <Redirect to="/signin" />

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit.bind(this)} className="white">
                    <h5 className="grey-text text-darken-3">Create a new project</h5>

                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange.bind(this)} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange.bind(this)}></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth0-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject)