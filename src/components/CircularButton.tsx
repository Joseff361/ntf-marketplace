import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
} from 'react-native';

import { Colors, Shadows } from '../constants';

interface Props {
  onPress: () => void;
  sourceImage: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
}

function CircularButton({ onPress, sourceImage, style = {} }: Props) {
  return (
    <TouchableOpacity
      style={[styles.favoriteContainer, style]}
      onPress={onPress}
    >
      <Image source={sourceImage} style={styles.image} resizeMode="contain" />
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
  image: {
    width: 24,
    height: 24,
  },
});

export default CircularButton;
