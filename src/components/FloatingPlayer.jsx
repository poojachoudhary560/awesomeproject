import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontFamilies } from '../constants/fonts';
import {
  GoToPreviousButton,
  GoToNextButton,
  PlayPauseButton,
} from './PlayerControls';

function FloatingPlayer() {
  return (
    <View style={styles.FloatingPlayer}>
      <TouchableOpacity style={styles.container}>
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
});

export default FloatingPlayer;
