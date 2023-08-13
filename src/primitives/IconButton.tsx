import { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';

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
    backgroundColor: '#FFFFFF',
  },
});

export default IconButton;
