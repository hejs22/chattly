import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

import commonStyles from '../styles';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  children: string;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <Pressable style={styles.container} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: commonStyles.sizes.radiusM,
    backgroundColor: commonStyles.colors.purpleDark,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    color: commonStyles.colors.white,
    padding: 12,
    fontSize: 18,
    fontFamily: 'SemiBold',
  },
});

export default Button;
