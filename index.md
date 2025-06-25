---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
outline: deep

hero:
  name: "Bible Reader app "
  text: "by the Christian Coder"
  tagline: Read the word of God freely and easily.
  image:
    light: /full-cross.svg
    dark: /full-cross.svg
    alt: Api3
  actions:

features:
  - title: About
    details: A simple, free, and open source app to read the Bible. The app is fast, nimble, and very easy to use.
  - title: Twelve Bible editions
    details: There are twelve different editions of the Bible including the King James and Catholic Public Domain editions, and more.
  - title: Internally funded
    details: The Christian Coder is committed to build and maintain the Bible Reader app without any external financial support or donations.
---

::::warning Apple's app store

An application to host the Bible Reader app on Apple's app store is currently pending.
::::

- Free app
- No in-app purchases
- No online purchases
- No ads
- No user logins, tracking, or analytics
- No backend server access
- 100% open source
- Source code open to public auditing
- Unlicense dedication to the public domain

## Quick look

The Bible Reader app was designed to be simple. The act of reading the Bible, as opposed to listening to someone reading it, allows the user's mind to float back-and-forth between verses as they read. This enhances the reader's understanding of the text. Controls and widgets just seem to get in the way.

### Books

Select a Bible (there are twelve editions) and start with any book from either the Old or New Testaments.

<!--div>Bible selections<img src="./bibles.png" style="width:300px;margin-right:20px;"></div-->
<div><img src="/home.png" style="width:250px;margin-right:20px;border:1px solid grey;border-radius:.5em;"></div>

## Chapters

Easily move betweens chapters and the verses within a chapter. There is even a feature to compare any verse with the same verse in all twelve Bible editions.

<div><img src="/reader.png" style="width:250px;margin-right:20px;border:1px solid grey;border-radius:.5em;"></div>

## Auditing

Anyone can view the [source code](https://github.com/christian-coder-org/bible-reader) of the Bible Reader app and perform an audit. Please feel free to verify the claims of the Christian Coder.

```ts
// A small sample of the typescript code behind the Bible Reader app.
const props = defineProps(["identifier"]);
const identifier = ref(props.identifier);
const bibles = ref(BIBLES);

const cancel = () => modalController.dismiss(null, "cancel");
const confirm = (identifier: string) =>
  modalController.dismiss(identifier, "confirm");
```

## Unlicense

The Christian Coder uses the [Unlicense template](https://unlicense.org). This template provides for free and unencumbered software released into the public domain. Such a license empowers people to grow and sustain the thriving wealth of shared knowledge and culture we need to address the world's most pressing challenges and create a brighter future for all.

- View the Bible Reader app [UNLICENSE](https://github.com/christian-coder-org/website/blob/main/UNLICENSE.md) file.

- View the Christian Coder website [UNLICENSE](https://github.com/christian-coder-org/bible-reader/blob/main/UNLICENSE.md) file.
