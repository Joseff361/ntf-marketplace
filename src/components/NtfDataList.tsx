import { FlatList, View } from 'react-native';

import HomeHeader from './HomeHeader';
import NTFCard from './card/NtfCard';
import { NTF } from '../models/NTF';

interface Props {
  data: NTF[];
  onSearch: (value: string) => void;
}

function NtfDataList({ data, onSearch }: Props) {
  return (
    <View style={{ zIndex: 0 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <NTFCard ntf={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
      />
    </View>
  );
}

export default NtfDataList;
