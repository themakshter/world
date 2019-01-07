import * as React from 'react';
import ActivityMap from './ActivityMap';
import ActivityRunner from './ActivityRunner';


interface IState {
  mode: string;
  activityComponentWidth: number;
  activityComponentHeight: number;
}

class ActivityManager extends React.Component<any, IState> {

  constructor(props: any) {
    super(props);
    this.state = { mode: 'map', activityComponentWidth: 750, activityComponentHeight: 500 };
    this.handleActivitySelection = this.handleActivitySelection.bind(this);
    this.handleMapNavigation = this.handleMapNavigation.bind(this);
  }

  private handleActivitySelection(selectedActivity: any) {
    this.setState({ mode: 'activity' });
  }

  private handleMapNavigation() {
    this.setState({ mode: 'map' });
  }

  private updateActivityComponentDimensions() {
    const calculatedWidth = window.innerWidth * 0.60;
    const calculatedHeight = calculatedWidth * 0.5625;
    this.setState({ activityComponentWidth: calculatedWidth, activityComponentHeight: calculatedHeight });
  }

  public componentWillMount() {
    this.updateActivityComponentDimensions();
    window.addEventListener('resize', this.updateActivityComponentDimensions.bind(this));
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateActivityComponentDimensions.bind(this));
  }

  public render() {
    const currentMode = this.state.mode;
    const activityComponentWidth = this.state.activityComponentWidth;
    const activityComponentHeight = this.state.activityComponentHeight;
    return (
      <div>
        {currentMode === 'map' &&
          <ActivityMap onActivitySelection={this.handleActivitySelection} width={activityComponentWidth} height={activityComponentHeight} />
        }
        {currentMode === 'activity' &&
          <ActivityRunner onReturnNavigation={this.handleMapNavigation} width={activityComponentWidth} height={activityComponentHeight} />
        }
      </div>
    );
  }


}

export default ActivityManager;
