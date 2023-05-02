import { View, Text, StyleProp, ViewStyle, StyleSheet } from 'react-native';

import { Colors, Fonts, Sizes } from '../constants';

interface Props {
  title: string;
  subtitle: string;
  style?: StyleProp<ViewStyle>;
}

function NtfTitle({ title, subtitle, style = {} }: Props) {
  return (
    <View style={[style]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: Fonts.RajdhaniSemiBold,
    fontSize: Sizes.large,
    color: Colors.primary,
  },
  subtitle: {
    fontFamily: Fonts.RajdhaniRegular,
    fontSize: Sizes.medium,
    color: Colors.primary,
  },
});

export default NtfTitle;
