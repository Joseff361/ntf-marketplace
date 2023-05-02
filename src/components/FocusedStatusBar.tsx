import { useIsFocused } from '@react-navigation/native';

import { StatusBar, StatusBarStyle } from 'react-native';

interface Props {
  backgroundColor: string;
  barStyle?: StatusBarStyle | null;
  translucent?: boolean;
}

function FocusedStatusBar({
  backgroundColor,
  barStyle,
  translucent = false,
}: Props) {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return null;
  }

  return (
    <StatusBar
      translucent={translucent}
      animated
      backgroundColor={backgroundColor}
      barStyle={barStyle}
    />
  );
}

export default FocusedStatusBar;
