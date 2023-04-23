import { SafeAreaView, StyleSheet } from 'react-native';

import BackgroundContainer from '../components/BackgroundContainer';
import FocusedStatusBar from '../components/FocusedStatusBar';
import NtfDataList from '../components/NtfDataList';
import { Colors, NFTData } from '../constants';

function HomeScreen() {
  const onSearchHandler = (value: string) => {
    console.log(value)
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={Colors.primary} />
      <NtfDataList data={NFTData} onSearch={onSearchHandler} />
      <BackgroundContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
