import React, { Component } from 'react'


function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
    // return <h1>test</h1>;
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
    // return <h1>test</h1>;

}

function UserGreeting(pros) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(pops) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick = () => {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick = () => {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        // console.log(button);
        return (
            <div>
                <Greeting isLoggedIn={false}/>
                {button}
            </div>
        )
    }
}
