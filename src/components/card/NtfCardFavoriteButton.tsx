import { StyleSheet, TouchableOpacity, Image } from 'react-native';

import { Assets, Colors, Shadows } from '../../constants';

interface Props {
  onPress: () => void;
}

function NtfCardFavoriteButton({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.favoriteContainer} onPress={onPress}>
      <Image
        source={Assets.heart}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favoriteContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
    right: 10,
    ...Shadows.light,
  },
});

export default NtfCardFavoriteButton;
