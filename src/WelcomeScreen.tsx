import * as React from 'react';
import logo from './images/world-logo.png';

interface IProps {
  onEnteringWorld: () => void;
}

class WelcomeScreen extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <img src={logo} className='app-logo' alt={logo} />
        <div className='enter-button'>
          <button onClick={this.props.onEnteringWorld} className='btn pcs4kids-world-btn enter-world'>
            Enter World
            <i className='glyphicon glyphicon-arrow-right arrow' />
          </button>
        </div>
      </div>
    );
  }
}

export default WelcomeScreen;
