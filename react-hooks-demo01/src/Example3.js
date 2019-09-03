import React, { Component } from 'react';
import { Button } from 'antd';
class Example3 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    componentDidMount() {
        console.log(`componentDidMount 点击了${this.state.count}次`);
    }
    componentDidUpdate() {
        console.log(`componentDidUpdate 点击了${this.state.count}次`);

    }
    render() {
        return (
            <div>
                <h2>点击了{this.state.count}次</h2>
                <Button
                    type="primary"
                    onClick={this.handleClick}
                >
                    点我
                </Button>
            </div>
        );
    }
    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }
}

export default Example3; 