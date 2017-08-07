import React from 'react';

export default class Form extends React.Component {

    onSubmit(e) {
        e.preventDefault();

        if (this.props.onSubmit) {
            this.props.onSubmit();
        }
    }

    render () {
        return (
            <form onSubmit={this.props.onSubmit} className={`form ${this.props.className}`}>
                {this.props.children}
            </form>
        );
    }
}
