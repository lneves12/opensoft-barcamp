adb install -r ./app/build/outputs/apk/app-release.apk
adb reverse tcp:8081 tcp:8081
adb shell input keyevent 82
cd android && ./gradlew assembleRelease