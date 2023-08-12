import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RoomsScreen from '../screens/rooms/RoomsScreen';
import { Screens } from '../shared/consts/ScreensConstants';

const Stack = createNativeStackNavigator();

function AppScreens() {
  return (
    <Stack.Navigator initialRouteName={Screens.ROOM}>
      <Stack.Screen name={Screens.ROOM} component={RoomsScreen} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer>
      <AppScreens />
    </NavigationContainer>
  );
}
