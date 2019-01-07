import * as RoundTheWorldGame from '@pcs4kids/round-the-world';
import * as React from 'react';

interface IProps {
  onReturnNavigation: () => void;
  width: number;
  height: number;
}
class ActivityRunner extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
  }

  private runActivity() {
    RoundTheWorldGame.createGameInDiv('activity-canvas');
  }

  public componentDidMount() {
    this.runActivity();
  }

  public render() {
    const dimensionsStyle = {
      width: this.props.width,
      height: this.props.height
    };
    return (
      <div>
        <div id='activity-canvas' style={dimensionsStyle} />
        <br />
        <br />
        <button className='btn pcs4kids-world-btn' onClick={this.props.onReturnNavigation}>Map</button>
      </div>
    );
  }
}

export default ActivityRunner;
