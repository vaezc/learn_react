import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
    }

    //你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。
    //public class fields 语法
    //https://babeljs.io/docs/en/babel-plugin-transform-class-properties/
    handleClick = (s)=> {
        console.log(s);
        this.setState( state =>({
            isToggleOn: !state.isToggleOn
        }));
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this,'vae')}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
            </div>
        )
    }
}
