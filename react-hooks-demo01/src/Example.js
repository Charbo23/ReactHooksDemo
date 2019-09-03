import React, { Component } from 'react';
import { Map } from 'immutable';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Map({
                count: 0
            })
        }

    }
    handleClick = () => {
        let newData = this.state.data.update('count', value => value + 1);
        this.setState({ data: newData })
    }

    render() {
        return (
            <div>
                <p>点击了{this.state.data.get('count')}次</p>
                <button onClick={this.handleClick}>点我</button>
            </div>
        );
    }
}

export default Example;