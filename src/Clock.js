import React, { Component } from 'react'

export default class Clock extends Component {

    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        //不要直接修改 State,应该使用setState()
        //State 的更新可能是异步的 , 让 **setState()**接收一个函数而不是一个对象。
        //State 的更新会被合并
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


