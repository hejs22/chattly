import { View, Text } from 'react-native';
import useRooms from '../../shared/hooks/useRooms';

const RoomsScreen = () => {
  const { error, loading, data } = useRooms();
  console.log(data);

  return (
    <View>
      <Text>Rooms</Text>
    </View>
  );
};

export default RoomsScreen;
