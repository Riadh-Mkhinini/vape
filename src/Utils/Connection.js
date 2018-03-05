import { Component } from 'react';
import { NetInfo } from 'react-native';


class Connection extends Component {
  constructor(props) {
    super(props);
    this.handleConnectionInfoChange = this.handleConnectionInfoChange.bind(this);
  }
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionInfoChange);
  }
  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectionInfoChange);
  }
  handleConnectionInfoChange(isConnected) {
    this.props.isConnectedApp(isConnected);
  }
  render() {
    return null;
  }
}

export { Connection };
