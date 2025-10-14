import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { colors } from '../constants/colors';
import { fontSize, iconSizes, spacing } from '../constants/dimensions';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <FontAwesome6
          name="grip-lines"
          iconStyle="solid"
          size={iconSizes.lg}
          color={colors.iconPrimary}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <FontAwesome6
          name="magnifying-glass"
          iconStyle="solid"
          size={iconSizes.lg}
          color={colors.iconPrimary}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.md,
  },
});

export default Header;
