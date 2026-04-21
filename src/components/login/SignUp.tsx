import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ActivityIndicator,
  Switch,
} from 'react-native';
import {useTheme} from '@cometchat/chat-uikit-react-native';
import {navigate, navigationRef} from '../../navigation/NavigationService';
import {SCREEN_CONSTANTS} from '../../utils/AppConstants';
import {
  createCometChatUser,
  mapCometChatAuthError,
  saveSignUpPassword,
  signInWithUid,
} from '../../services/cometchatAuth';

const SignUp: React.FC = () => {
  const theme = useTheme();
  const [uid, setUid] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [link, setLink] = useState('');
  const [role, setRole] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [tags, setTags] = useState('');
  const [privateEmail, setPrivateEmail] = useState('');
  const [privateContactNumber, setPrivateContactNumber] = useState('');
  const [withAuthToken, setWithAuthToken] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const parsedTags = useMemo(
    () =>
      tags
        .split(',')
        .map(item => item.trim())
        .filter(Boolean),
    [tags],
  );

  const createAndSignIn = async () => {
    if (!uid.trim() || !name.trim() || isSubmitting) return;
    if (password.length < 6) {
      setError('Use a password of at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');
    setIsSubmitting(true);
    try {
      await createCometChatUser({
        uid,
        name,
        avatar,
        link,
        role,
        statusMessage,
        tags: parsedTags,
        privateEmail,
        privateContactNumber,
        withAuthToken,
      });
      await signInWithUid(uid);
      await saveSignUpPassword(uid, password);
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
    <ScrollView
      style={[styles.container, {backgroundColor: theme.color.background2}]}
      contentContainerStyle={styles.content}>
      <Text style={[theme.typography.heading2.bold, {color: theme.color.textPrimary}]}>
        Create CometChat User
      </Text>
      <Text style={[styles.subtitle, theme.typography.body.regular, {color: theme.color.textSecondary}]}>
        Required: uid, name, password. CometChat keys are bundled in the app. Optional profile fields follow the `/users` API.
      </Text>

      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="UID *" placeholderTextColor={theme.color.textTertiary} value={uid} onChangeText={setUid} autoCapitalize="none" />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Name *" placeholderTextColor={theme.color.textTertiary} value={name} onChangeText={setName} />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Password * (min 6 characters)" placeholderTextColor={theme.color.textTertiary} value={password} onChangeText={setPassword} secureTextEntry autoCapitalize="none" />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Confirm password *" placeholderTextColor={theme.color.textTertiary} value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry autoCapitalize="none" />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Avatar URL" placeholderTextColor={theme.color.textTertiary} value={avatar} onChangeText={setAvatar} autoCapitalize="none" />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Profile Link URL" placeholderTextColor={theme.color.textTertiary} value={link} onChangeText={setLink} autoCapitalize="none" />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Role" placeholderTextColor={theme.color.textTertiary} value={role} onChangeText={setRole} />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Status Message" placeholderTextColor={theme.color.textTertiary} value={statusMessage} onChangeText={setStatusMessage} />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Tags (comma-separated)" placeholderTextColor={theme.color.textTertiary} value={tags} onChangeText={setTags} />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Private Email (metadata.@private.email)" placeholderTextColor={theme.color.textTertiary} value={privateEmail} onChangeText={setPrivateEmail} autoCapitalize="none" />
      <TextInput style={[styles.input, {borderColor: theme.color.borderLight, color: theme.color.textPrimary}]} placeholder="Private Contact Number (metadata.@private.contactNumber)" placeholderTextColor={theme.color.textTertiary} value={privateContactNumber} onChangeText={setPrivateContactNumber} />

      <View style={styles.switchRow}>
        <Text style={[theme.typography.body.regular, {color: theme.color.textPrimary}]}>
          Request `withAuthToken`
        </Text>
        <Switch value={withAuthToken} onValueChange={setWithAuthToken} />
      </View>

      {!!error && <Text style={[styles.error, theme.typography.caption1.regular]}>{error}</Text>}

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: theme.color.primaryButtonBackground,
            opacity:
              uid.trim() && name.trim() && password.length >= 6 && password === confirmPassword
                ? 1
                : 0.6,
          },
        ]}
        onPress={createAndSignIn}
        disabled={
          !uid.trim() ||
          !name.trim() ||
          password.length < 6 ||
          password !== confirmPassword ||
          isSubmitting
        }>
        {isSubmitting ? (
          <ActivityIndicator color={theme.color.staticWhite} />
        ) : (
          <Text style={[theme.typography.button.medium, {color: theme.color.staticWhite}]}>
            Create and Continue
          </Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate(SCREEN_CONSTANTS.SIGN_IN)}>
        <Text style={[styles.link, theme.typography.body.medium, {color: theme.color.primary}]}>
          Already have a UID? Sign in
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {padding: 16, paddingBottom: 40},
  subtitle: {marginTop: 8, marginBottom: 8},
  hint: {marginBottom: 8},
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 12,
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

export default SignUp;
