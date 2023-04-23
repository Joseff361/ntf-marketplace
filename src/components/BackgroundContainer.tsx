import { StyleSheet, View } from 'react-native';

import { Colors } from '../constants';

function BackgroundContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
    backgroundColor: Colors.white,
  },
  top: {
    height: 300,
    backgroundColor: Colors.primary,
  },
});

export default BackgroundContainer;
