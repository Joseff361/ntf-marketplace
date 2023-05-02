import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import { useRef } from 'react';

import { Assets, Colors, Fonts, Sizes } from '../constants';

interface Props {
  onSearch: (value: string) => void;
}

function HomeHeader({ onSearch }: Props) {
  const inputRef = useRef<any>();

  const onPressInputHandler = () => {
    !!inputRef && inputRef.current.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.heaerContainer}>
        <Image
          source={Assets.logo}
          resizeMode="contain"
          style={styles.logoImage}
        />
        <View>
          <Image
            source={Assets.person01}
            resizeMode="contain"
            style={styles.personImage}
          />
          <Image
            source={Assets.badge}
            resizeMode="contain"
            style={styles.verifiedImage}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.waveText}>Hello, Emma 👋</Text>
        <Text style={styles.advice}>Let's find a masterpiece</Text>
      </View>
      <Pressable style={styles.searchContainer} onPress={onPressInputHandler}>
        <Image
          source={Assets.search}
          resizeMode="contain"
          style={styles.searchIcon}
        />
        <TextInput
          ref={inputRef}
          style={styles.input}
          placeholder="Search NTFs"
          placeholderTextColor={Colors.secondary}
          onChangeText={onSearch}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Sizes.font,
  },
  heaerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {
    width: 90,
    height: 45,
  },
  personImage: {
    width: 45,
    height: 45,
  },
  verifiedImage: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: -2,
    right: -2,
  },
  infoContainer: {
    marginVertical: Sizes.font,
  },
  waveText: {
    fontFamily: Fonts.RajdhaniRegular,
    fontSize: Sizes.medium,
    color: Colors.white,
  },
  advice: {
    fontFamily: Fonts.RajdhaniSemiBold,
    fontSize: Sizes.extraLarge,
    color: Colors.white,
  },
  searchContainer: {
    marginTop: Sizes.font,
    borderRadius: Sizes.font,
    backgroundColor: Colors.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Sizes.font,
    paddingVertical: Sizes.small - 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: Sizes.base,
  },
  input: {
    fontFamily: Fonts.RajdhaniSemiBold,
  },
});

export default HomeHeader;
