# Build the app

Simple build steps via command line.

```sh
# Build the Ionic app
pnpm build

# (optional) Create the IOS app if the folder /ios does not exist
npx cap add ios

# Sync the current build with the IOS app in the /ios folder
npx cap sync ios

# (optional) Opens Xcode with the named workspace
open ios/App/App.xcworkspace
```