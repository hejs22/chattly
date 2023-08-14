import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react';

import ChatRoomHeader from '../components/headers/ChatRoomHeader';
import LoginHeader from '../components/headers/LoginHeader';
import RoomsListHeader from '../components/headers/RoomsListHeader';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import RoomsScreen from '../screens/RoomsScreen';
import { Screens } from '../shared/consts/ScreensConstants';
import { AuthContext } from '../shared/contexts/AuthContext';
import { useAuth } from '../shared/hooks/auth/useAuth';
import { extractOtherUserDataFromMessages } from '../shared/utils/chatUtils';
import { navigationRef } from '../shared/utils/navigationUtils';
import { RoomDetails } from '../types/Chat';
import { RootStackParamList } from '../types/Navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

function AuthScreens() {
  return (
    <Stack.Navigator initialRouteName={Screens.LOGIN}>
      <Stack.Screen
        name={Screens.LOGIN}
        component={LoginScreen}
        options={{ header: () => <LoginHeader /> }}
      />
    </Stack.Navigator>
  );
}

function ChatScreens() {
  return (
    <Stack.Navigator initialRouteName={Screens.ROOMS}>
      <Stack.Screen
        name={Screens.ROOMS}
        component={RoomsScreen}
        options={{ header: () => <RoomsListHeader /> }}
      />
      <Stack.Screen
        name={Screens.CHAT}
        component={ChatScreen}
        options={{
          header: ({ route }) => {
            const { messages, user } = (route.params as { chatRoomDetails: RoomDetails })
              ?.chatRoomDetails;
            return <ChatRoomHeader user={extractOtherUserDataFromMessages(messages, user)} />;
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function Home() {
  const { isSignedIn } = useAuth();
  return (
    <NavigationContainer ref={navigationRef}>
      {!isSignedIn ? <AuthScreens /> : <ChatScreens />}
    </NavigationContainer>
  );
}
