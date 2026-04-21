import * as Crypto from 'expo-crypto';
import * as SecureStore from 'expo-secure-store';

const STORAGE_KEY = (uid: string) => `local_auth_v1_${uid.trim()}`;

async function hashPassword(password: string, saltHex: string): Promise<string> {
  return Crypto.digestStringAsync(
    Crypto.CryptoDigestAlgorithm.SHA256,
    `${saltHex}:${password}`,
  );
}

export async function hasLocalPassword(uid: string): Promise<boolean> {
  const key = STORAGE_KEY(uid);
  const v = await SecureStore.getItemAsync(key);
  return !!v;
}

export async function savePasswordForUid(uid: string, password: string): Promise<void> {
  const saltBytes = Crypto.getRandomBytes(16);
  const saltHex = Array.from(saltBytes, b =>
    b.toString(16).padStart(2, '0'),
  ).join('');
  const hash = await hashPassword(password, saltHex);
  await SecureStore.setItemAsync(
    STORAGE_KEY(uid),
    JSON.stringify({salt: saltHex, hash}),
  );
}

export async function verifyPasswordForUid(
  uid: string,
  password: string,
): Promise<boolean> {
  const raw = await SecureStore.getItemAsync(STORAGE_KEY(uid));
  if (!raw) {
    return false;
  }
  try {
    const {salt, hash} = JSON.parse(raw) as {salt: string; hash: string};
    const next = await hashPassword(password, salt);
    return next === hash;
  } catch {
    return false;
  }
}
