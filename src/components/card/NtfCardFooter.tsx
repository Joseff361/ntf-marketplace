import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { Assets, Colors, Fonts, Sizes } from '../../constants';

interface Props {
  price: string | number;
  onPressDetails: () => void;
}

function NtfCardFooter({ price, onPressDetails }: Props) {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.row}>
        <Image source={Assets.eth} resizeMode="contain" style={styles.image} />
        <Text style={styles.priceText}>{price}</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onPressDetails}>
        <Text style={styles.buttonText}>Place a bid</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  priceText: {
    fontFamily: Fonts.RajdhaniMedium,
    fontSize: Sizes.font,
    color: Colors.primary,
  },
  buttonContainer: {
    borderRadius: Sizes.extraLarge,
    backgroundColor: Colors.primary,
    padding: Sizes.small,
  },
  buttonText: {
    fontFamily: Fonts.RajdhaniSemiBold,
    fontSize: Sizes.small,
    color: Colors.white,
  },
});

export default NtfCardFooter;
