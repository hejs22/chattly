import { View, Text, StyleSheet } from 'react-native';

import commonStyles from '../../styles';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome back</Text>
      <Text style={styles.subheader}>Log in and stay in touch with everyone!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.containers.screenHeader,
    paddingTop: 70,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  header: {
    ...commonStyles.text.screenHeaderText,
    lineHeight: 42,
  },
  subheader: {
    marginTop: 30,
    fontSize: 20,
    fontFamily: 'Bold',
    color: commonStyles.colors.white,
  },
});

export default LoginHeader;
