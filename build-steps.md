
```markdown
# React Native Project Build Steps



## Build Steps

1. **Clone  and checkout to the Correct Branch*

2. **Install SDKMAN and Set Up `$JAVA_HOME`**
   - Install SDKMAN to manage your Java versions and set up the `$JAVA_HOME` environment variable.

3. **Install Android Studio**
   - Download and install Android Studio to set up the Android development environment.

4. **Install Project Dependencies**
   ```bash
   npm install
   ```

5. **Connect Mobile Device (for Android Development)**
   - Use ADB to connect your mobile device to the development server:
   ```bash
   adb reverse tcp:8081 tcp:8081
   ```

6. **Start React Native Server**
   ```bash
   npx react-native start
   ```

7. **Check Gradle Version**
   - Verify that the correct Gradle version is specified in the `gradle-wrapper.properties` file:
   ```properties
   distributionUrl=https\://services.gradle.org/distributions/gradle-8.6-all.zip
   ```

8. **Set SDK Directory**
   - Create a `local.properties` file in the `android` folder and set the SDK directory path:
   ```properties
   sdk.dir = /home/john_doe/Android/Sdk
   ```

9. **Run Android Development Build**
   ```bash
   npm run dev-android
   ```

## Troubleshooting Build Failures

- **If the build fails, try the following steps:**
  1. **Search for solutions online.**
  2. **Delete `node_modules` and reinstall:**
     ```bash
     rm -r node_modules/
     npm install
     ```
  3. **Clear Gradle cache:**
     ```bash
     rm -r $HOME/.gradle/caches/
     ```
  4. **Optionally, delete the entire Gradle folder (use with caution):**
     ```bash
     rm -r $HOME/.gradle
     ```
  5. **Clean and rebuild the Android project:**
     ```bash
     cd android
     ./gradlew clean build
     ```
     - If the build is successful, return to the root directory and run:
     ```bash
     cd ..
     npm run dev-android
     ```

## Notes
- Ensure that all environment variables are correctly set, including `$JAVA_HOME` and Android SDK paths.
- Keep your Android Studio and SDK tools updated to avoid compatibility issues.
