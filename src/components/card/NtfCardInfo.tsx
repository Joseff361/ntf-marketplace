import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';

import { Assets, Colors, Fonts, Sizes } from '../../constants';

const PEOPLE_ASSETS = [Assets.person02, Assets.person03, Assets.person04];

interface Props {
  style?: StyleProp<ViewStyle>;
}

function NtfCardInfo({ style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.people}>
        {PEOPLE_ASSETS.map((imageUrl, index) => (
          <Image
            key={imageUrl + index}
            source={imageUrl}
            resizeMode="contain"
            style={[styles.image, index !== 0 && { marginLeft: -Sizes.font }]}
          />
        ))}
      </View>
      <View style={styles.endDate}>
        <Text style={styles.text}>Ending in</Text>
        <Text style={styles.time}>12h 30m</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  people: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 48,
    height: 48,
  },
  endDate: {
    backgroundColor: Colors.white,
    paddingHorizontal: Sizes.base,
    paddingVertical: Sizes.base,
    maxWidth: '40%',
    alignItems: 'center',
    borderBottomRightRadius: Sizes.font,
  },
  text: {
    fontFamily: Fonts.RajdhaniMedium,
    fontSize: Sizes.small,
    color: Colors.primary,
  },
  time: {
    fontFamily: Fonts.RajdhaniSemiBold,
    fontSize: Sizes.medium,
    color: Colors.primary,
  },
});

export default NtfCardInfo;
