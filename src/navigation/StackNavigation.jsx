import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screen/HomeScreen';
import LikeScreen from '../screen/LikeScreen';
import PlayerScreen from '../screen/PlayerScreen';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // initialRouteName="PLAYER_SCREEN"
    >
      <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
      <Stack.Screen name="LIKE_SCREEN" component={LikeScreen} />
      <Stack.Screen name="PLAYER_SCREEN" component={PlayerScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default StackNavigation;
