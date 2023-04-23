import { useIsFocused } from '@react-navigation/native';
import { StatusBar } from 'react-native';

interface Props {
  backgroundColor: string;
}

function FocusedStatusBar({ backgroundColor }: Props) {
  const isFocused = useIsFocused();

  if (!isFocused) {
    return null;
  }

  return <StatusBar animated backgroundColor={backgroundColor} />;
}

export default FocusedStatusBar;
