import { useNavigation } from '@react-navigation/native';
import { View, Image, StyleSheet } from 'react-native';

import { Assets, Colors, Shadows, Sizes } from '../../constants';
import CircularButton from '../CircularButton';
import NtfCardFooter from './NtfCardFooter';
import NtfCardInfo from './NtfCardInfo';
import { NTF } from '../../models/NTF';
import NtfTitle from '../NtfTitle';

interface Props {
  ntf: NTF;
}

function NTFCard({ ntf }: Props) {
  const navigation = useNavigation<any>();

  const onPressFavoriteHandler = () => {};

  const onPressDetailsHandler = () => {
    navigation.navigate('Details', { ntf });
  };

  return (
    <View style={styles.container}>
      <Image source={ntf.image} resizeMode="cover" style={styles.image} />
      <CircularButton
        onPress={onPressFavoriteHandler}
        sourceImage={Assets.heart}
      />
      <View style={styles.descriptionContainer}>
        <NtfCardInfo style={styles.infoContainer} />
        <NtfTitle
          title={ntf.name}
          subtitle={ntf.creator}
          style={styles.titleContainer}
        />
        <NtfCardFooter
          price={ntf.price}
          onPressDetails={onPressDetailsHandler}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderRadius: Sizes.font,
    marginBottom: Sizes.font,
    margin: Sizes.base,
    minHeight: 250,
    ...Shadows.dark,
  },
  image: {
    width: '100%',
    height: 230,
    borderTopLeftRadius: Sizes.font,
    borderTopRightRadius: Sizes.font,
  },
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  infoContainer: {
    width: '100%',
    position: 'absolute',
    top: -20,
    left: 10,
  },
  titleContainer: {
    paddingTop: 40,
    paddingBottom: 5,
  },
});

export default NTFCard;
