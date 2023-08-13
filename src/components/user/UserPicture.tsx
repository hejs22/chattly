import { memo } from 'react';
import { View } from 'react-native';

import PROFILE_PICTURE from '../../assets/profile.svg';

interface UserPictureProps {
  size: number;
}

const UserPicture = ({ size }: UserPictureProps) => {
  return (
    <View>
      <PROFILE_PICTURE width={size} height={size} />
    </View>
  );
};

export default memo(UserPicture);
