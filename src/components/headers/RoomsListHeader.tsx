import { View, Text, StyleSheet } from 'react-native';

import ROOMS_ICON from '../../assets/rooms.svg';
import SEARCH_ICON from '../../assets/search.svg';
import IconButton from '../../primitives/IconButton';
import commonStyles from '../../styles';

const RoomsListHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rooms</Text>
      <View style={styles.buttonsContainer}>
        <IconButton>
          <SEARCH_ICON />
        </IconButton>
        <IconButton>
          <ROOMS_ICON />
        </IconButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screenHeader,
  },
  header: {
    ...commonStyles.text.screenHeaderText,
    lineHeight: 42,
  },
  buttonsContainer: {
    marginLeft: 'auto',
    flexDirection: 'row',
    gap: 10,
  },
});

export default RoomsListHeader;
