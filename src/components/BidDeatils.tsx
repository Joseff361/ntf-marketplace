import { View, Text, Image, StyleSheet } from 'react-native';

import { Colors, Fonts } from '../constants';
import { Bid } from '../models/NTF';
import NTFPrice from './NtfPrice';

interface Props {
  bid: Bid;
}

function BidDeatils({ bid }: Props) {
  return (
    <View style={styles.container}>
      <Image source={bid.image} resizeMode="contain" style={styles.image} />
      <View>
        <Text style={styles.title}>Bid placed by {bid.name}</Text>
        <Text style={styles.date}>{bid.date}</Text>
      </View>
      <NTFPrice price={bid.price} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 48,
    height: 48,
  },
  title: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.primary,
  },
  date: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.secondary,
    fontSize: 12,
  },
});

export default BidDeatils;
