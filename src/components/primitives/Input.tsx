import { useState } from 'react';
import { Control, useController } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps, View, Text, Pressable } from 'react-native';

import PASSWORD_HIDDEN_ICON from '../../assets/vision-low.svg';
import PASSWORD_VISIBLE_ICON from '../../assets/vision.svg';
import commonStyles from '../../styles';

interface InputProps extends TextInputProps {
  name: string;
  control?: Control;
  label?: string;
}

const Input = ({ name, secureTextEntry, defaultValue, control, label, ...props }: InputProps) => {
  const [isValueVisible, setIsValueVisible] = useState(!secureTextEntry);
  const ICON = isValueVisible ? PASSWORD_VISIBLE_ICON : PASSWORD_HIDDEN_ICON;
  const { field } = useController({ control, defaultValue, name });

  const toggleValueVisibility = () => {
    setIsValueVisible((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        {...props}
        value={field.value}
        onChangeText={field.onChange}
        style={[styles.input, secureTextEntry && styles.additionalPadding]}
        secureTextEntry={!isValueVisible}
      />
      {secureTextEntry && (
        <Pressable style={styles.visibilityIcon} onTouchEnd={toggleValueVisibility}>
          <ICON width={30} height={30} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  input: {
    borderRadius: commonStyles.sizes.radiusS,
    backgroundColor: commonStyles.colors.white,
    padding: 15,
    fontSize: 15,
  },
  label: {
    color: commonStyles.colors.white,
    fontFamily: 'Regular',
    fontSize: 15,
  },
  visibilityIcon: {
    position: 'absolute',
    right: 15,
    bottom: 20,
  },
  additionalPadding: {
    paddingRight: 60,
  },
});

export default Input;
