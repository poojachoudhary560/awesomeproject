import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function GoToPreviousButton({ size = iconSizes.lg }) {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <FontAwesome6
        name="backward-step"
        iconStyle="solid"
        size={size}
        color={colors.iconPrimary}
      />
    </TouchableOpacity>
  );
}

export function GoToNextButton({ size = iconSizes.lg }) {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <FontAwesome6
        name="forward-step"
        iconStyle="solid"
        size={size}
        color={colors.iconPrimary}
      />
    </TouchableOpacity>
  );
}

export function PlayPauseButton({ size = iconSizes.lg }) {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <FontAwesome6
        name={true ? 'pause' : 'play'}
        iconStyle="solid"
        size={size}
        color={colors.iconPrimary}
      />
    </TouchableOpacity>
  );
}
