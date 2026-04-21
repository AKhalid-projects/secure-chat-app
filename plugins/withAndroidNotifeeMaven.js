const { withProjectBuildGradle } = require('expo/config-plugins');

const MAVEN_LINE =
  '    maven { url("$rootDir/../node_modules/@notifee/react-native/android/libs") }';

/**
 * Registers Notifee's local Maven repo so `app.notifee:core` resolves during :app configuration.
 * @notifee/react-native ships the AAR under node_modules/.../android/libs; Gradle must see that repo early.
 */
function withAndroidNotifeeMaven(config) {
  return withProjectBuildGradle(config, (config) => {
    if (config.modResults.language !== 'groovy') {
      return config;
    }
    let contents = config.modResults.contents;
    if (contents.includes('@notifee/react-native/android/libs')) {
      return config;
    }
    const replaced = contents.replace(
      /(allprojects\s*\{\s*\n\s*repositories\s*\{\s*\n)/,
      `$1${MAVEN_LINE}\n`
    );
    config.modResults.contents = replaced;
    return config;
  });
}

module.exports = withAndroidNotifeeMaven;
