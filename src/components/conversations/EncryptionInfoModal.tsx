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

const WHATSAPP_GREEN = '#25D366';
const MODAL_CARD_BG = '#1F2A1F';
const OVERLAY_BG = 'rgba(0,0,0,0.6)';
const TITLE_COLOR = '#FFFFFF';
const BODY_COLOR = '#B8B8B8';
const BULLET_COLOR = '#B8B8B8';

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

function EncryptionIllustration() {
  const safeGreen = WHATSAPP_GREEN;
  const paperWhite = '#F5F5DC';
  const photoCircleStroke = '#8BC34A';
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
        stroke={photoCircleStroke}
        strokeWidth={1}
      />
      {/* Circular photo/media icon on the document */}
      <Circle
        cx={48}
        cy={58}
        r={14}
        fill="none"
        stroke={photoCircleStroke}
        strokeWidth={2}
      />
      <Circle cx={44} cy={54} r={2} fill={photoCircleStroke} />
      <Path
        d="M42 62 L48 56 L54 60 L54 64 L42 64 Z"
        fill={photoCircleStroke}
        opacity={0.6}
      />
      {/* Safe / cabinet - main green shape */}
      <Path
        d="M52 28 L68 28 L72 32 L72 88 L48 88 L48 32 Z"
        fill={safeGreen}
      />
      <Path
        d="M50 30 L70 30 L74 34 L74 86 L46 86 L46 34 Z"
        fill="none"
        stroke="#1B5E20"
        strokeWidth={1}
      />
      {/* Safe door outline */}
      <Rect x={52} y={36} width={18} height={44} rx={1} fill="#1B5E20" />
      {/* Safe circular handle */}
      <Circle cx={61} cy={58} r={6} fill={safeGreen} stroke="#1B5E20" strokeWidth={1} />
      <Circle cx={61} cy={58} r={3} fill="#1B5E20" />
    </Svg>
  );
}

export default function EncryptionInfoModal({
  visible,
  onClose,
  learnMoreUrl = DEFAULT_LEARN_MORE_URL,
}: EncryptionInfoModalProps) {
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
            <View style={[styles.card, { backgroundColor: MODAL_CARD_BG }]}>
              <TouchableOpacity
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                onPress={onClose}
                style={styles.closeButton}
              >
                <Text style={styles.closeText}>✕</Text>
              </TouchableOpacity>

              <View style={styles.illustrationWrap}>
                <EncryptionIllustration />
              </View>

              <Text style={[styles.title, { color: TITLE_COLOR }]}>{TITLE}</Text>
              <Text style={[styles.description, { color: BODY_COLOR }]}>
                {DESCRIPTION}
              </Text>

              <View style={styles.bulletList}>
                {BULLETS.map((item, index) => (
                  <View key={index} style={styles.bulletRow}>
                    <Text style={[styles.bullet, { color: BULLET_COLOR }]}>
                      •{' '}
                    </Text>
                    <Text style={[styles.bulletText, { color: BULLET_COLOR }]}>
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
                <Text style={[styles.learnMore, { color: WHATSAPP_GREEN }]}>
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
    backgroundColor: 'rgba(255,255,255,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeText: {
    color: TITLE_COLOR,
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
