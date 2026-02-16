import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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

export type EncryptionNoticeInlineBannerProps = {
  onPress: () => void;
};

export default function EncryptionNoticeInlineBanner({
  onPress,
}: EncryptionNoticeInlineBannerProps) {
  const theme = useTheme();
  const bubbleBg = (theme.color.background3 ?? theme.color.background2) as string;
  const textColor = theme.color.textSecondary as string;
  const accentColor = theme.color.primary as string;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.bubble, { backgroundColor: bubbleBg }]}
    >
      <View style={styles.iconWrap}>
        <LockIcon color={textColor} size={LOCK_ICON_SIZE} />
      </View>
      <Text style={styles.text}>
        <Text style={[styles.body, { color: textColor }]}>
          Messages and calls are end-to-end encrypted. Only people in this chat
          can read, listen to, or share them.{' '}
        </Text>
        <Text style={[styles.learnMore, { color: accentColor }]}>Learn more</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  bubble: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginHorizontal: 12,
    marginTop: 8,
    marginBottom: 6,
    borderRadius: 10,
  },
  iconWrap: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    fontSize: 13,
    lineHeight: 19,
  },
  body: {},
  learnMore: {
    fontWeight: '600',
  },
});
