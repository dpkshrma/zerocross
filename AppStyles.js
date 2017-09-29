import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  board: {
    height: '80%',
    width: '80%',
    transform:[{rotate: '-10 deg'}],
  },
  row: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
  },
  rtBorderCell: {
    borderRightWidth: 4,
    borderRightColor: 'black',
  },
  btBorderCell: {
    borderBottomWidth: 4,
    borderBottomColor: 'black',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  cellText: {
    fontSize: 40,
  },
});

export default styles;
