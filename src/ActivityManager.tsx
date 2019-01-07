import * as React from 'react';
import ActivityMap from './ActivityMap';
import ActivityRunner from './ActivityRunner';


interface IState {
  mode: string;
}

class ActivityManager extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = { mode: 'map' };
        this.handleActivitySelection = this.handleActivitySelection.bind(this);
        this.handleMapNavigation = this.handleMapNavigation.bind(this);
    }

    private handleActivitySelection(selectedActivity : any){
      this.setState( { mode: 'activity' });
    }

    private handleMapNavigation(){
      this.setState( {mode: 'map'});
    }

    public render() {
        const currentMode = this.state.mode;
        const activityComponentWidth = window.screen.availWidth * 0.60;
        const activityComponentHeight = activityComponentWidth * 0.5625;
        return (
          <div>
            {currentMode === 'map' &&
              <ActivityMap onActivitySelection={this.handleActivitySelection} width={activityComponentWidth} height={activityComponentHeight} />
            }
            { currentMode === 'activity' &&
              <ActivityRunner onReturnNavigation={this.handleMapNavigation} width={activityComponentWidth} height={activityComponentHeight} />
            }
          </div>
        );
    }


}

export default ActivityManager;
