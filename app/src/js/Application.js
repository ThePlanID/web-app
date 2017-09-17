import React, { Component } from 'react';
import { auth, database } from './firebase';
import CurrentUser from './CurrentUser';
import SignIn from './SignIn';
import NewStage from './NewStage';
import Stages from './Stages';
import '../css/Application.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((currentUser) => {
      console.log('AUTH_CHANGE', currentUser);
      this.setState({ currentUser });
    });
  }

  render() {
    return (
      <div className="Application">
        <header className="Application--header">
          <h1>The PlanId</h1>
        </header>
        <div>
          {<SignIn />}
        </div>
      </div>
    );
  }
}

export default Application;
