import React from 'react';
import { connect } from 'react-redux';
import { login, logout } from './actions';

class GApi extends React.Component {

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
                this.getAuthStatus(this.auth.isSignedIn.get());   //pass login status to redux store
                this.auth.isSignedIn.listen(() => this.getAuthStatus(this.auth.isSignedIn.get()));  // subscribe for login status changes
            })
        });
    }

    getAuthStatus(e) {
        e === true ? this.props.login(this.auth.currentUser.get().getId()) : this.props.logout();
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderLoginStatus() {
        if (this.props.loginStatus)
            return <div className='ui red google button' onClick={this.onSignOutClick}>Sign Out</div>;
        else
            return <div className='ui green google button' onClick={this.onSignInClick}>Sign In</div>
    }
}

const mapStateToProps = (state) => {
    return { loginStatus: state.authentication.loginStatus }
}

export default connect(mapStateToProps, { login, logout })(GApi);