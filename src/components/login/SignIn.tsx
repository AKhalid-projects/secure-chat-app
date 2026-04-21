import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {useTheme} from '@cometchat/chat-uikit-react-native';
import {navigate, navigationRef} from '../../navigation/NavigationService';
import {SCREEN_CONSTANTS} from '../../utils/AppConstants';
import {mapCometChatAuthError, signInWithUid} from '../../services/cometchatAuth';

const SignIn: React.FC = () => {
  const theme = useTheme();
  const [uid, setUid] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = async () => {
    if (!uid.trim() || isSubmitting) return;
    setError('');
    setIsSubmitting(true);
    try {
      await signInWithUid(uid);
      navigate(SCREEN_CONSTANTS.BOTTOM_TAB_NAVIGATOR);
      navigationRef.reset({
        index: 0,
        routes: [{name: SCREEN_CONSTANTS.BOTTOM_TAB_NAVIGATOR}],
      });
    } catch (e) {
      setError(mapCometChatAuthError(e));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.color.background2}]}>
      <Text style={[theme.typography.heading2.bold, {color: theme.color.textPrimary}]}>
        Sign In
      </Text>
      <Text style={[styles.subtitle, theme.typography.body.regular, {color: theme.color.textSecondary}]}>
        Enter your CometChat UID.
      </Text>

      <TextInput
        placeholder="UID"
        value={uid}
        onChangeText={text => {
          setUid(text);
          setError('');
        }}
        autoCapitalize="none"
        style={[
          styles.input,
          {
            borderColor: theme.color.borderLight,
            color: theme.color.textPrimary,
          },
        ]}
        placeholderTextColor={theme.color.textTertiary}
      />

      {!!error && (
        <Text style={[styles.error, theme.typography.caption1.regular]}>{error}</Text>
      )}

      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: theme.color.primaryButtonBackground, opacity: uid.trim() ? 1 : 0.6},
        ]}
        disabled={!uid.trim() || isSubmitting}
        onPress={handleSignIn}>
        {isSubmitting ? (
          <ActivityIndicator color={theme.color.staticWhite} />
        ) : (
          <Text style={[theme.typography.button.medium, {color: theme.color.staticWhite}]}>
            Continue
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate(SCREEN_CONSTANTS.SIGN_UP)}>
        <Text style={[styles.link, theme.typography.body.medium, {color: theme.color.primary}]}>
          Create a new user
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SCREEN_CONSTANTS.SAMPLE_USER)}>
        <Text style={[styles.link, theme.typography.body.medium, {color: theme.color.primary}]}>
          Use sample users
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate(SCREEN_CONSTANTS.APP_CRED)}>
        <Text style={[styles.link, theme.typography.body.medium, {color: theme.color.primary}]}>
          Change app credentials
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 8,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 8,
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  link: {
    textAlign: 'center',
    marginTop: 14,
  },
  error: {
    color: '#C73C3E',
    marginTop: 4,
  },
});

export default SignIn;
