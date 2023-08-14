import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatRoomHeader from '../components/headers/ChatRoomHeader';
import LoginHeader from '../components/headers/LoginHeader';
import RoomsListHeader from '../components/headers/RoomsListHeader';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import RoomsScreen from '../screens/RoomsScreen';
import { isSignedIn } from '../services/AuthService';
import { Screens } from '../shared/consts/ScreensConstants';
import { extractOtherUserDataFromMessages } from '../shared/utils/chatUtils';
import { navigationRef } from '../shared/utils/navigationUtils';
import { RootStackParamList } from '../types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AppScreens() {
  return (
    <Stack.Navigator initialRouteName={Screens.LOGIN}>
      <Stack.Screen
        name={Screens.LOGIN}
        component={LoginScreen}
        options={{ header: () => <LoginHeader /> }}
      />
      <Stack.Screen
        name={Screens.ROOMS}
        component={RoomsScreen}
        options={{ header: () => <RoomsListHeader /> }}
      />
      <Stack.Screen
        name={Screens.CHAT}
        component={ChatScreen}
        options={{
          header: ({ route }) => (
            <ChatRoomHeader
              user={extractOtherUserDataFromMessages(
                route.params?.chatRoomDetails.messages,
                route.params?.chatRoomDetails.user
              )}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppScreens />
    </NavigationContainer>
  );
}
