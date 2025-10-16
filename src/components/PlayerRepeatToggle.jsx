import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function PlayerRepeatToggle() {
  return (
    <TouchableOpacity>
      <FontAwesome6
        name="repeat"
        iconStyle="solid"
        size={iconSizes.md}
        color={colors.iconPrimary}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

export default PlayerRepeatToggle;
