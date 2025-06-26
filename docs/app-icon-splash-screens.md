# App icon and splash screens

Capacitor provides [instructions](https://capacitorjs.com/docs/guides/splash-screens-and-icons) that for the most part are useful. However the app use a simplified set of steps.

## `@capacitor/assets` 

The package `@capacitor/assets` is needed.

```sh
pnpm install @capacitor/assets --save-dev
```

## Assets folder

As capacitor requires there is a folder named `/assets` with the some of the files Capacitors suggests.

```sh
assets/
├── icon-only.png
├── splash.png
└── splash-dark.png
```

- icon-only.png - The app's only app icon, white background with a dark cross.
- splash.png - The app's light mode splash screen, white background with a dark cross.
- splash-dark.png - The app's dark mode splash screen, dark background with a light cross.

These file were created from the `/public/cross.svg` file using the online tool [SVGtoPNG](https://svgtopng.com).

## Create command

Create the asset for IOS.

```sh
npx capacitor-assets generate --ios
```