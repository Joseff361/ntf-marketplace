import { View, Image, Text, StyleSheet } from 'react-native';

import { Assets, Colors, Fonts, Sizes } from '../constants';

interface Props {
  price: string | number;
}

function NTFPrice({ price }: Props) {
  return (
    <View style={styles.row}>
      <Image source={Assets.eth} resizeMode="contain" style={styles.image} />
      <Text style={styles.priceText}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceText: {
    fontFamily: Fonts.RajdhaniMedium,
    fontSize: Sizes.font,
    color: Colors.primary,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});

export default NTFPrice;
