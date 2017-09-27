import React from 'react';
import { StyleSheet, Text, View, ListView, Alert, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import _ from 'lodash';
import s from './AppStyles';

export default class App extends React.Component {
  onCellClick = (e, cellId) => {
    e.preventDefault();
    Alert.alert(
      `You pressed cell ${cellId}!`,
      'cool!!!'
    );
  };
  getTouchable = id => {
    return (
      <TouchableHighlight
        title=''
        onPress={e => this.onCellClick(e, id)}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Text></Text>
      </TouchableHighlight>
    );
  };

  render() {
    const borderCol = StyleSheet.flatten([s.rtBorderCell, s.cell]);
    const borderRow = StyleSheet.flatten([s.btBorderCell, s.cell]);
    return (
      <View style={s.container}>
        <Grid>
          <Col style={borderCol}>
            <Row style={borderRow}>
              {this.getTouchable(1)}
            </Row>
            <Row style={borderRow}>
              {this.getTouchable(2)}
            </Row>
            <Row style={s.cell}>
              {this.getTouchable(3)}
            </Row>
          </Col>
          <Col style={borderCol}>
            <Row style={borderRow}>
              {this.getTouchable(4)}
            </Row>
            <Row style={borderRow}>
              {this.getTouchable(5)}
            </Row>
            <Row style={s.cell}>
              {this.getTouchable(6)}
            </Row>
          </Col>
          <Col>
            <Row style={borderRow}>
              {this.getTouchable(7)}
            </Row>
            <Row style={borderRow}>
              {this.getTouchable(8)}
            </Row>
            <Row style={s.cell}>
              {this.getTouchable(9)}
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
