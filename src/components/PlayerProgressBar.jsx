import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { fontFamilies } from '../constants/fonts';

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
  GoToPreviousButton,
  GoToNextButton,
  PlayPauseButton,
} from './PlayerControls';
export function PlayerProgressBar() {
  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>00:05</Text>
        <Text style={styles.timeText}>{'-'}04:05</Text>
      </View>
      <View style={styles.playPauseContainer}>
        <GoToPreviousButton size={iconSizes.xl} />
        <PlayPauseButton size={iconSizes.xl} />
        <GoToNextButton size={iconSizes.xl} />
      </View>
    </View>
  );
}

export default PlayerProgressBar;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  timeText: {
    color: colors.textPrimary,
    fontFamily: fontFamilies.Regular,
    fontSize: fontSize.sm,
    opacity: 0.75,
  },
  playPauseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xl,
    justifyContent: 'center',
    marginTop: spacing.xl,
  },
});
