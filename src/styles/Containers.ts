import { StyleSheet } from 'react-native';

import { COLORS } from './Colors';

export const containerStyles = StyleSheet.create({
  screenHeader: {
    padding: 15,
    backgroundColor: COLORS.blue,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingTop: 50,
  },
  screen: {
    backgroundColor: COLORS.blueLight,
    flexGrow: 1,
  },
});
