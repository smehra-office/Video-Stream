import React from 'react';

class GApi extends React.Component {

    state = { login: null };

    render() {
        return <div>{this.renderLoginStatus()}</div>
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '534576584637-0bqcvlhgomlms3nh70qeecdebaf0pe0q.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ login: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(() => this.getAuthStatus());
            })
        });
    }

    getAuthStatus() {
        this.setState({ login: this.auth.isSignedIn.get() });
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    renderLoginStatus() {
        if (this.auth?.isSignedIn.get())
            return <div className='ui red google button' onClick={this.onSignOut}>Sign Out</div>;
        else
            return <div className='ui green google button' onClick={this.onSignIn}>Sign In</div>
    }
}

export default GApi;