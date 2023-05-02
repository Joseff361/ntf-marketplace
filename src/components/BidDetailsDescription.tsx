import { View, Text, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { Colors, Fonts } from '../constants';
import NtfTitle from './NtfTitle';
import NTFPrice from './NtfPrice';

interface Props {
  title: string;
  subtitle: string;
  price: number;
  description: string;
}

const MAX_CHARACTERS = 120;

function BidDeatilsDescription({ title, subtitle, price, description }: Props) {
  const [text, setText] = useState<string>(
    description.slice(0, MAX_CHARACTERS),
  );
  const [readMore, setReadMore] = useState<boolean>(false);

  const readMoreContent = readMore ? ' Show less.' : ' ... Read More.';

  useEffect(() => {
    setText(readMore ? description : description.slice(0, MAX_CHARACTERS));
  }, [readMore]);

  const onToggleReadMoreHandler = () => {
    setReadMore(current => !current);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <NtfTitle title={title} subtitle={subtitle} />
        <NTFPrice price={price} />
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Description</Text>
        <Text style={styles.text}>
          {text}
          <Text style={styles.readMore} onPress={onToggleReadMoreHandler}>
            {readMoreContent}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    marginTop: 20,
  },
  title: {
    fontFamily: Fonts.RajdhaniMedium,
    color: Colors.primary,
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    fontFamily: Fonts.RajdhaniRegular,
    color: Colors.secondary,
  },
  readMore: {
    fontFamily: Fonts.RajdhaniSemiBold,
    color: Colors.primary,
  },
});

export default BidDeatilsDescription;
