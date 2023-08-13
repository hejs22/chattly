import ContentLoader, { Circle } from 'react-content-loader/native';
import { StyleSheet, View } from 'react-native';

import commonStyles from '../../../styles';
import UserPicture from '../../user/UserPicture';
import { memo } from 'react';

const UserTypingIndicator = () => {
  return (
    <View style={styles.container}>
      <UserPicture size={30} />
      <View style={styles.bubble}>
        <ContentLoader
          speed={2}
          width={400}
          height={80}
          viewBox="0 0 400 80"
          backgroundColor="#dddddd"
          foregroundColor="#bbbbbb">
          <Circle cx="20" cy="20" r="6" />
          <Circle cx="40" cy="20" r="6" />
          <Circle cx="60" cy="20" r="6" />
        </ContentLoader>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
    marginBottom: 40,
  },
  bubble: {
    width: 80,
    height: 40,
    backgroundColor: commonStyles.colors.white,
    borderRadius: commonStyles.sizes.radiusM,
    borderBottomLeftRadius: 0,
    marginBottom: 5,
  },
});

export default memo(UserTypingIndicator);
