import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { useSharedValue } from 'react-native-reanimated';
import { Slider } from 'react-native-awesome-slider';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamilies } from '../constants/fonts';
import {
  GoToPreviousButton,
  GoToNextButton,
  PlayPauseButton,
} from './PlayerControls';
import { useNavigation } from '@react-navigation/native';

function FloatingPlayer() {
  const navigation = useNavigation();
  const progress = useSharedValue(0.2);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const handleOpenPlayerScreen = () => {
    navigation.navigate('PLAYER_SCREEN');
  };
  return (
    <View style={styles.FloatingPlayer}>
      <View
        style={{
          zIndex: 1,
        }}
      >
        <Slider
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          style={styles.sliderContainer}
          theme={{
            minimumTrackTintColor: colors.minimumTintColor,
            maximumTrackTintColor: colors.maximumTintColor,
          }}
          renderBubble={() => <View />}
        />
      </View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={handleOpenPlayerScreen}
      >
        <Image
          source={{
            uri: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
          }}
          style={styles.coverImage}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Monster Go Home</Text>
          <Text style={styles.artist}>Alan Walker</Text>
        </View>
        <View style={styles.playerControlsContainer}>
          <GoToPreviousButton size={iconSizes.md} />
          <PlayPauseButton />
          <GoToNextButton size={iconSizes.md} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  coverImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
  },
  title: {
    color: colors.textPrimary,
    fontSize: fontSize.lg,
    fontFamily: fontFamilies.Medium,
  },
  artist: {
    color: colors.textSecondary,
    fontFamily: fontFamilies.Regular,
    fontSize: fontSize.md,
  },
  playerControlsContainer: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    paddingRight: spacing.lg,
  },
  sliderContainer: {},
});

export default FloatingPlayer;
