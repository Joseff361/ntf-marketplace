import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Colors, Fonts, Sizes } from '../../constants';
import NTFPrice from '../NtfPrice';

interface Props {
  price: string | number;
  onPressDetails: () => void;
}

function NtfCardFooter({ price, onPressDetails }: Props) {
  return (
    <View style={[styles.container, styles.row]}>
      <NTFPrice price={price} />
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
