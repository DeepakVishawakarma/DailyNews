if [ "$1" == "runa" ]; then
npx jetify && react-native run-android
fi
if [ "$1" == "runi" ]; then
react-native run-ios --simulator="iPhone 11"
fi

if [ "$1" == "build" ]; then
npx jetify && cd android && ./gradlew app:assembleRelease

fi
