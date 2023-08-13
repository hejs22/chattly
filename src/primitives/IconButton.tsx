import { ReactNode } from 'react';
import { Pressable, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import commonStyles from '../styles';

interface RoundButtonProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onClick?: () => void;
}

const IconButton = ({ children, onClick, style }: RoundButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} onTouchEnd={onClick}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 100,
    backgroundColor: commonStyles.colors.white,
  },
});

export default IconButton;
