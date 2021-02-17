import React from 'react';
import overviewStyle from '../../css/overview.css';


class StatisticsEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2>{this.name}</h2>
              <h4> is the statistics entity </h4>
            </div>
      );
    }
}

class RecentlyPlayedEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2> {this.name} </h2>
              <h3> song 1 </h3>
              <h3> song 2 </h3>
              <h3> song 3 </h3>
            </div>
      );
    }
}

class DataEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2>{this.name}</h2>
              <h4> some data </h4>
            </div>
      );
    }
}

class OtherDataEntity extends React.Component {
    constructor(props) {
      super(props);
      this.name = props.name;
    }

    render() {
      return (
            <div class='entityContainer'>
              <h2>{this.name}</h2>
              <h4> some other data </h4>
            </div>
      );
    }
}


export { StatisticsEntity, RecentlyPlayedEntity, DataEntity, OtherDataEntity }
