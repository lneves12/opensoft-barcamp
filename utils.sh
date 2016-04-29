adb install -r ./app/build/outputs/apk/app-release.apk
adb reverse tcp:8081 tcp:8081
db shell input keyevent 82
