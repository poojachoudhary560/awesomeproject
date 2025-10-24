import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import TrackPlayer from 'react-native-track-player';
import { useEffect } from 'react';

function App() {
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
  };
  useEffect(() => {
    setupPlayer();
    console.log('track player setup success');
  }, []);

  // The player is ready to be used
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});

export default App;
