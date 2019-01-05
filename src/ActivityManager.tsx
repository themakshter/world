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
        return (
          <div>
            {currentMode === 'map' &&
              <ActivityMap onActivitySelection={this.handleActivitySelection} />
            }
            { currentMode === 'activity' &&
              <ActivityRunner onReturnNavigation={this.handleMapNavigation} />
            }
          </div>
        );
    }


}

export default ActivityManager;
