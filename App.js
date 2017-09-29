import React from 'react';
import { StyleSheet, Text, View, ListView, Alert, TouchableHighlight } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";
import _ from 'lodash';
import s from './AppStyles';

const DEFAULT_STATE = {
  cellStates: {},
  matchWon: null,
  userMarker: 'x',
  botMarker: 'o',
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }
  componentDidUpdate() {
    const result = this.getGameResult();
    if (result) {
      if (result === 'user') {
        Alert.alert('Congrats, you won!');
      } else {
        Alert.alert('Sorry, you lost. Better luck next time!');
      }
      // this.setState(DEFAULT_STATE);
    }
  }
  getGameResult = () => {
    // TODO: check if game over
    const winSequences = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    let result;
    _.some(winSequences, seq => {
      const { cellStates } = this.state;
      const userMarkerMatch = _.every(seq, cellId => {
        return cellStates[cellId] === this.state.userMarker;
      });
      const botMarkerMatch = _.every(seq, cellId => {
        return cellStates[cellId] === this.state.botMarker;
      });
      if (userMarkerMatch) {
        result = 'user';
      }
      if (botMarkerMatch) {
        result = 'bot';
      }
      return userMarkerMatch || botMarkerMatch;
    });
    return result;
  };
  onCellClick = (e, cellId) => {
    e.preventDefault();
    if (this.state.cellStates[cellId]) {
      return;
    }
    const cellStates = Object.assign(
      {},
      this.state.cellStates,
      { [cellId]: this.state.userMarker }
    );
    // randomly criss one cell
    const cellIds = Array.from({length: 9}, (v,i) => i+1);
    const markedCellIds = [
      ..._.map(_.keys(_.pickBy(this.state.cellStates)), _.toNumber),
      cellId
    ];
    const emptyCellIds = _.difference(cellIds, markedCellIds);
    const randomIndex = Math.floor(Math.random()*emptyCellIds.length+1)-1;
    const randomEmptyCellId = emptyCellIds[randomIndex];
    cellStates[randomEmptyCellId] = this.state.botMarker;
    this.setState({ cellStates })
  };
  getCell = id => {
    return (
      <TouchableHighlight
        title=''
        onPress={e => this.onCellClick(e, id)}
        style={s.cell}
      >
        <Text style={s.cellText}>
          {this.state.cellStates[id]}
        </Text>
      </TouchableHighlight>
    );
  };

  render() {
    const borderCol = StyleSheet.flatten([s.rtBorderCell, s.row]);
    const borderRow = StyleSheet.flatten([s.btBorderCell, s.row]);
    return (
      <View style={s.board}>
        <Grid style={s.grid}>
          <Col style={borderCol}>
            <Row style={borderRow}>
              {this.getCell(1)}
            </Row>
            <Row style={borderRow}>
              {this.getCell(2)}
            </Row>
            <Row style={s.row}>
              {this.getCell(3)}
            </Row>
          </Col>
          <Col style={borderCol}>
            <Row style={borderRow}>
              {this.getCell(4)}
            </Row>
            <Row style={borderRow}>
              {this.getCell(5)}
            </Row>
            <Row style={s.row}>
              {this.getCell(6)}
            </Row>
          </Col>
          <Col>
            <Row style={borderRow}>
              {this.getCell(7)}
            </Row>
            <Row style={borderRow}>
              {this.getCell(8)}
            </Row>
            <Row style={s.row}>
              {this.getCell(9)}
            </Row>
          </Col>
        </Grid>
      </View>
    );
  }
}
