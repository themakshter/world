import * as RoundTheWorldGame from '@pcs4kids/round-the-world';
import * as React from 'react';

interface IProps {
  onReturnNavigation: () => void;
}
class ActivityRunner extends React.Component<IProps> {

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
      RoundTheWorldGame.createGameInDiv('activity-canvas');
    }

    public render() {
        return (
          <div>
            <div id='activity-canvas' />
              <button onClick={this.props.onReturnNavigation}>Map</button>
          </div>
        );
    }
}

export default ActivityRunner;
