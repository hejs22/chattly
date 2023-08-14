import { memo } from 'react';
import { useForm } from 'react-hook-form';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Button from '../../primitives/Button';
import Input from '../../primitives/Input';
import commonStyles from '../../styles';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
  isLoading?: boolean;
  error?: string | null;
}

const LoginForm = ({ onSubmit, isLoading, error }: LoginFormProps) => {
  const { control, handleSubmit, getValues } = useForm();

  const handleOnSubmit = () => {
    onSubmit(getValues('email'), getValues('password'));
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Input label="e-mail address" control={control} name="email" autoComplete="email" />
        <Input secureTextEntry label="password" control={control} name="password" />
      </View>

      {!!isLoading && <ActivityIndicator size="large" />}
      {!isLoading && !!error && <Text style={styles.error}>Invalid email or password</Text>}
      {!isLoading && <Button onTouchEnd={handleSubmit(handleOnSubmit)}>Log in</Button>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexGrow: 1,
  },
  form: {
    gap: 20,
    width: '100%',
    alignSelf: 'center',
    flexGrow: 1,
  },
  error: {
    fontFamily: 'Bold',
    fontSize: 14,
    color: commonStyles.colors.red,
    width: '100%',
    textAlign: 'center',
  },
});

export default memo(LoginForm);
