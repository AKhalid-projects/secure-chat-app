import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import EncryptionInfoModal from './EncryptionInfoModal';

const LOCK_ICON_SIZE = 14;

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

const NOTICE_TEXT =
  'Messages and calls are end-to-end encrypted. Only people in this chat can read, listen to, or share them. Tap to learn more.';

/** System-message style bubble (grey, centered) like "System added ..." in group chats. */
const BUBBLE_BG = '#E8E8E8';
const BUBBLE_TEXT = '#5A5A5A';
const LOCK_COLOR = '#6B6B6B';

export type EncryptionNoticeSystemMessageProps = {
  user?: any;
  group?: any;
  id?: { uid?: string; guid?: string; parentMessageId?: string };
};

export default function EncryptionNoticeSystemMessage({
  user,
  id,
}: EncryptionNoticeSystemMessageProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const isOneToOne = Boolean(id?.uid || user);

  if (!isOneToOne) return null;

  return (
    <>
      <View style={styles.wrapper}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => setModalVisible(true)}
          style={styles.bubble}
        >
          <LockIcon color={LOCK_COLOR} size={LOCK_ICON_SIZE} />
          <Text style={styles.text}>{NOTICE_TEXT}</Text>
        </TouchableOpacity>
      </View>
      <EncryptionInfoModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    paddingBottom: 6,
  },
  bubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: BUBBLE_BG,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 12,
    maxWidth: '90%',
  },
  text: {
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
    color: BUBBLE_TEXT,
    marginLeft: 8,
  },
});
