import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  BackHandler,
  Linking,
} from 'react-native';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { useTheme } from '@cometchat/chat-uikit-react-native';

const OVERLAY_BG = 'rgba(0,0,0,0.6)';

const TITLE = 'Your chats and calls are private';
const DESCRIPTION =
  'End-to-end encryption keeps your personal messages and calls between you and the people you choose. No one outside of the chat, not even WhatsApp, can read, listen to, or share them. This includes your:';
const BULLETS = [
  'Text and voice messages',
  'Audio and video calls',
  'Photos, videos and documents',
  'Location sharing',
  'Status updates',
];

const DEFAULT_LEARN_MORE_URL =
  'https://faq.whatsapp.com/1317759042886655';

export type EncryptionInfoModalProps = {
  visible: boolean;
  onClose: () => void;
  learnMoreUrl?: string;
};

function EncryptionIllustration({ primaryColor }: { primaryColor: string }) {
  const paperWhite = '#F5F5DC';
  const size = 120;

  return (
    <Svg width={size} height={size} viewBox="0 0 120 120">
      {/* Document / paper behind */}
      <Rect
        x={24}
        y={32}
        width={48}
        height={56}
        rx={2}
        fill={paperWhite}
        stroke={primaryColor}
        strokeWidth={1}
      />
      {/* Circular photo/media icon on the document */}
      <Circle
        cx={48}
        cy={58}
        r={14}
        fill="none"
        stroke={primaryColor}
        strokeWidth={2}
      />
      <Circle cx={44} cy={54} r={2} fill={primaryColor} />
      <Path
        d="M42 62 L48 56 L54 60 L54 64 L42 64 Z"
        fill={primaryColor}
        opacity={0.6}
      />
      {/* Safe / cabinet - main shape */}
      <Path
        d="M52 28 L68 28 L72 32 L72 88 L48 88 L48 32 Z"
        fill={primaryColor}
      />
      <Path
        d="M50 30 L70 30 L74 34 L74 86 L46 86 L46 34 Z"
        fill="none"
        stroke={primaryColor}
        strokeWidth={1}
      />
      {/* Safe door outline */}
      <Rect x={52} y={36} width={18} height={44} rx={1} fill={primaryColor} opacity={0.6} />
      {/* Safe circular handle */}
      <Circle cx={61} cy={58} r={6} fill={primaryColor} stroke={primaryColor} strokeWidth={1} />
      <Circle cx={61} cy={58} r={3} fill={paperWhite} />
    </Svg>
  );
}

export default function EncryptionInfoModal({
  visible,
  onClose,
  learnMoreUrl = DEFAULT_LEARN_MORE_URL,
}: EncryptionInfoModalProps) {
  const theme = useTheme();

  useEffect(() => {
    if (!visible) return;
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      onClose();
      return true;
    });
    return () => sub.remove();
  }, [visible, onClose]);

  const handleLearnMore = () => {
    Linking.openURL(learnMoreUrl);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={[styles.overlay, { backgroundColor: OVERLAY_BG }]}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={[
                styles.card,
                { backgroundColor: theme.color.background1 },
              ]}
            >
              <TouchableOpacity
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                onPress={onClose}
                style={[
                  styles.closeButton,
                  { backgroundColor: theme.color.background3 },
                ]}
              >
                <Text style={[styles.closeText, { color: theme.color.textPrimary }]}>✕</Text>
              </TouchableOpacity>

              <View style={styles.illustrationWrap}>
                <EncryptionIllustration primaryColor={theme.color.primary} />
              </View>

              <Text style={[styles.title, { color: theme.color.textPrimary }]}>
                {TITLE}
              </Text>
              <Text style={[styles.description, { color: theme.color.textSecondary }]}>
                {DESCRIPTION}
              </Text>

              <View style={styles.bulletList}>
                {BULLETS.map((item, index) => (
                  <View key={index} style={styles.bulletRow}>
                    <Text style={[styles.bullet, { color: theme.color.textSecondary }]}>
                      •{' '}
                    </Text>
                    <Text style={[styles.bulletText, { color: theme.color.textSecondary }]}>
                      {item}
                    </Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleLearnMore}
                style={styles.learnMoreWrap}
              >
                <Text style={[styles.learnMore, { color: theme.color.primary }]}>
                  Learn more
                </Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 44,
    paddingBottom: 24,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeText: {
    fontSize: 18,
    fontWeight: '300',
  },
  illustrationWrap: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 14,
    paddingHorizontal: 8,
  },
  description: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 4,
  },
  bulletList: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 15,
    marginRight: 6,
    lineHeight: 22,
  },
  bulletText: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
  },
  learnMoreWrap: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  learnMore: {
    fontSize: 16,
    fontWeight: '600',
  },
});
