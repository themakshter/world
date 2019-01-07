import * as BasicCustomMap from '@pcs4kids/basic-custom-map';
import * as React from 'react';

import bearImage from './images/animal-bear.png';
import cheetahImage from './images/animal-cheetah.png';
import giraffeImage from './images/animal-giraffe.png';
import monkeyImage from './images/animal-monkey.png';
import pantherImage from './images/animal-panther.png';
import mapImage from './images/map.png';

interface IProps {
  onActivitySelection: (parameter: any) => void;
  width: number;
  height: number;
}

class ActivityMap extends React.Component<IProps> {

  constructor(props: any) {
    super(props);
  }

  private drawMap() {
    const activityRunFunction = this.props.onActivitySelection;
    const map = {
      title: 'Fun Island',
      imageSource: mapImage,
      coordinateSpace: {
        width: 750,
        height: 500
      },
      pins: [
        {
          name: 'Giddy Giraffe',
          description: 'Come along for a great ride with our G!',
          imageSource: giraffeImage,
          position: {
            x: 180,
            y: 200
          },
          dimensions: {
            width: 50,
            height: 70
          },
          callbackFunction: activityRunFunction
        },
        {
          name: 'Mischievous Monkey',
          description: 'Watch out before he steals your wallet!',
          imageSource: monkeyImage,
          position: {
            x: 500,
            y: 350
          },
          dimensions: {
            width: 50,
            height: 65
          },
          callbackFunction: activityRunFunction
        },
        {
          name: 'Crafty Cheetah',
          description: 'Once a Cheetah, always a Cheetah!',
          imageSource: cheetahImage,
          position: {
            x: 300,
            y: 75
          },
          dimensions: {
            width: 70,
            height: 50
          },
          callbackFunction: activityRunFunction
        },
        {
          name: 'Pristine Panther',
          description: 'He\'s got nothing on our boy Pink Panther!',
          imageSource: pantherImage,
          position: {
            x: 500,
            y: 110
          },
          dimensions: {
            width: 70,
            height: 50
          },
          callbackFunction: activityRunFunction
        },
        {
          name: 'Baddie Bear',
          description: 'Big Bad Bear waits for nobody!',
          imageSource: bearImage,
          position: {
            x: 350,
            y: 275
          },
          dimensions: {
            width: 70,
            height: 50
          },
          callbackFunction: activityRunFunction
        }
      ]
    }
    BasicCustomMap.createMap('activity-map', map);
  }

  public componentDidMount(){
    this.drawMap();
  }

  public componentDidUpdate() {
    this.drawMap();
  }

  public render() {

    return (
      <svg id='activity-map' width={this.props.width} height={this.props.height} />
    );
  }
}

export default ActivityMap;
