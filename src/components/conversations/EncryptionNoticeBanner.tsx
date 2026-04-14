import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@cometchat/chat-uikit-react-native';

const LOCK_ICON_SIZE = 16;

const LockIcon = ({ color, size }: { color: string; size: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10V7a6 6 0 1 1 12 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1zm2-3a4 4 0 1 1 8 0v3H8V7zm2 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z"
    />
  </Svg>
);

export type EncryptionNoticeBannerProps = {
  onPress: () => void;
  containerStyle?: ViewStyle;
};

const BANNER_TEXT =
  'Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them. Learn more';

export default function EncryptionNoticeBanner({
  onPress,
  containerStyle,
}: EncryptionNoticeBannerProps) {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.banner,
        {
          backgroundColor: theme.color.background3,
          borderLeftWidth: 4,
          borderLeftColor: theme.color.primary,
        },
        containerStyle,
      ]}
    >
      <View style={styles.iconWrap}>
        <LockIcon color={theme.color.primary} size={LOCK_ICON_SIZE} />
      </View>
      <Text style={[styles.text, { color: theme.color.textPrimary }]}>
        {BANNER_TEXT}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 8,
  },
  iconWrap: {
    marginRight: 8,
  },
  text: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
});
