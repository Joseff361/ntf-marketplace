import {
  View,
  Image,
  Text,
  ImageSourcePropType,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import BidDeatilsDescription from './BidDetailsDescription';
import { Assets, Colors, Fonts } from '../constants';
import CircularButton from './CircularButton';
import NtfCardInfo from './card/NtfCardInfo';

interface Props {
  imageSource: ImageSourcePropType;
  title: string;
  subtitle: string;
  price: number;
  description: string;
}

const statusBarHeight: number = StatusBar.currentHeight || 0;

function BidDeatilsHeader({
  imageSource,
  title,
  subtitle,
  price,
  description,
}: Props) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Image source={imageSource} resizeMode="cover" style={styles.image} />
      <CircularButton
        onPress={navigation.goBack}
        sourceImage={Assets.left}
        style={{ left: 15, top: statusBarHeight + 15 }}
      />
      <CircularButton
        onPress={() => null}
        sourceImage={Assets.heart}
        style={{ top: statusBarHeight + 15 }}
      />
      <NtfCardInfo style={{ marginTop: -20, paddingHorizontal: 15 }} />
      <BidDeatilsDescription
        title={title}
        subtitle={subtitle}
        price={price}
        description={description}
      />
      <Text style={styles.bids}>Current Bids</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  image: {
    width: '100%',
    height: 373,
  },
  bids: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.primary,
    fontSize: 18,
    marginBottom: 10,
    margin: 15
  },
});

export default BidDeatilsHeader;
