import { Control, useController } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native';

import commonStyles from '../styles';

interface InputProps extends TextInputProps {
  name: string;
  control?: Control;
  label?: string;
}

const Input = ({ name, defaultValue, control, label, ...props }: InputProps) => {
  const { field } = useController({ control, defaultValue, name });
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        value={field.value}
        onChangeText={field.onChange}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  input: {
    borderRadius: commonStyles.sizes.radiusM,
    backgroundColor: commonStyles.colors.white,
    padding: 15,
    fontSize: 15,
  },
  label: {
    color: commonStyles.colors.white,
    fontFamily: 'Regular',
  },
});

export default Input;
