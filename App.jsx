import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
import LikeScreen from './src/screen/LikeScreen';
import PlayerScreen from './src/screen/PlayerScreen';

// function HomeScreen() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'red',
//       }}
//     >
//       <Text>Home Screen 1</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="PLAYER_SCREEN"
      >
        <Stack.Screen name="HOME_SCREEN" component={HomeScreen} />
        <Stack.Screen name="LIKE_SCREEN" component={LikeScreen} />
        <Stack.Screen name="PLAYER_SCREEN" component={PlayerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
