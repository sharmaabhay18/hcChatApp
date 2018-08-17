import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { Button } from '../components/common';

class ComponentList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
     rowHasChanged: (r1, r2) => r1 !== r2
   });

   this.dataSource = ds.cloneWithRows(this.props.result.result.fulfillment.data || []);
  }

  renderRow(res) {
    return <ListItem res={res} />;
  }
   renderFooter = () => {
     return (
       <View
       style={{
         alignItems: 'flex-start',
         justifyContent: 'center',
         padding: 10,
         flexDirection: 'row',
         marginLeft: 0
       }}
       >
       <Button style={style.prevButtonStyle}>Prev</Button>
       <Button style={style.nextButtonStyle}>Next</Button>
       </View>
     );
   }

  render() {
    const count = this.dataSource.getRowCount();
    if (count === 0) {
      if (this.props.result.result.score === 0) {
        return (
          <View style={style.viewStyle}>
          <Text style={style.textStyle}>Please Try Again!</Text>
          </View>
        );
      }
      return (
        <View style={style.viewStyle}>
        <Text style={style.textStyle}>{this.props.result.result.fulfillment.speech}</Text>
        </View>
      );
    }
      return (<ListView
    dataSource={this.dataSource}
    renderRow={this.renderRow}
    renderFooter={this.renderFooter}
      />);
  }
}

const style = {
 viewStyle: {
   alignItems: 'center',
   marginTop: 15
 },
 textStyle: {
   fontSize: 17,
   letterSpacing: 0.5
 },
 prevButtonStyle: {
   paddingLeft: 13,
   paddingRight: 13,
   marginLeft: 15
 },
 nextButtonStyle: {
   paddingLeft: 13,
   paddingRight: 13,
   marginRight: 15
 }
};

const mapStateToProps = state => {
 return state.csInput;
};

export default connect(mapStateToProps)(ComponentList);
