import * as React from 'react';
import ActivityManager from './ActivityManager';
import './App.css';
import WelcomeScreen from './WelcomeScreen';

interface IState {
  hasEnteredWorld: boolean;
}

class App extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.handleEnterWorldClick = this.handleEnterWorldClick.bind(this);
    this.state = { hasEnteredWorld: false };

  }

  private handleEnterWorldClick() {
    this.setState({ hasEnteredWorld: true });
  }

  public render() {
    const isInWorld = this.state.hasEnteredWorld
    return (
      <div className='app'>
        {!isInWorld &&
          <WelcomeScreen onEnteringWorld={this.handleEnterWorldClick} />
        }
        {isInWorld &&
          <ActivityManager />
        }
      </div>
    );
  }
}

export default App;
