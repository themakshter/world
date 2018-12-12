import * as RoundTheWorldGame from '@pcs4kids/round-the-world';
import * as React from 'react';


class ActivityRunner extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public componentDidMount() {
      RoundTheWorldGame.createGameInDiv('activity-canvas');
    }

    public render() {
        return (
            <div id='activity-canvas' />
        );
    }
}

export default ActivityRunner;
