import { SafeAreaView, StyleSheet } from 'react-native';

import BackgroundContainer from '../components/BackgroundContainer';
import FocusedStatusBar from '../components/FocusedStatusBar';
import NtfDataList from '../components/NtfDataList';
import { Colors, NFTData } from '../constants';
import { useState } from 'react';
import { NTF } from '../models/NTF';

function HomeScreen() {
  const [ntfData, setNtfData] = useState<NTF[]>(NFTData);

  const onSearchHandler = (value: string) => {
    if (value.trim().length === 0) {
      setNtfData(NFTData);
      return;
    }

    const filteredData = NFTData.filter(d =>
      d.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()),
    );

    setNtfData(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar backgroundColor={Colors.primary} />
      <NtfDataList data={ntfData} onSearch={onSearchHandler} />
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
