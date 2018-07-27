import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class ComponentList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2
   });

   this.dataSource = ds.cloneWithRows(this.props.result.result.fulfillment.data);
  }

  renderRow(res) {
    return <ListItem res={res} />;
  }

  render() {
    return (
    <ListView
    dataSource={this.dataSource}
    renderRow={this.renderRow}
    />
    );
  }
}

const mapStateToProps = state => {
 return state.csInput;
};

export default connect(mapStateToProps)(ComponentList);
