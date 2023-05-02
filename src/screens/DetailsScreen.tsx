import { useRoute } from '@react-navigation/native';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import FocusedStatusBar from '../components/FocusedStatusBar';
import BidDeatilsHeader from '../components/BidDetailsHeader';
import { Colors, Fonts, Sizes } from '../constants';
import BidDeatils from '../components/BidDeatils';
import { NTF } from '../models/NTF';

function DetailsScreen() {
  const route = useRoute<any>();

  const { ntf }: { ntf: NTF } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <FocusedStatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <FlatList
        data={ntf.bids}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <BidDeatils bid={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Sizes.extraLarge * 2 }}
        ListHeaderComponent={() => (
          <BidDeatilsHeader
            imageSource={ntf.image}
            title={ntf.name}
            subtitle={ntf.creator}
            price={ntf.price}
            description={ntf.description}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.empty}>There are no bids</Text>
        )}
      />
      <TouchableOpacity style={styles.bidContainer}>
        <Text style={styles.bidText}>Place a bid</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bidContainer: {
    position: 'absolute',
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    bottom: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    zIndex: 1,
  },
  bidText: {
    fontFamily: Fonts.RajdhaniSemiBold,
    fontSize: 16,
    color: Colors.white,
  },
  empty: {
    fontFamily: Fonts.RajdhaniSemiBold,
    textAlign: 'center',
    color: Colors.secondary,
    marginBottom: 10,
  },
});

export default DetailsScreen;
