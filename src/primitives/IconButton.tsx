import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

import commonStyles from '../styles';

interface RoundButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const IconButton = ({ children, onClick }: RoundButtonProps) => {
  return (
    <Pressable style={styles.button} onTouchEnd={onClick}>
      {children}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderRadius: 100,
    backgroundColor: commonStyles.colors.white,
  },
});

export default IconButton;
