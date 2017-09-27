import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    width: '100%',
  },
  rtBorderCell: {
    borderRightWidth: 4,
    borderRightColor: 'black',
  },
  btBorderCell: {
    borderBottomWidth: 4,
    borderBottomColor: 'black',
  },
});

export default styles;
