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
    details: There are twelve different editions of the Bible including the King James, Catholic Public Domain, and more.
  - title: Internally funded
    details: The Christian Coder is committed to build and maintain the Bible Reader app without any external financial support or donations.
---

::::warning Apple's app store

An application to host the Bible Reader app on Apple's app store is currently pending.
::::

<!-- The indentation that follows is important or you get an error -->
<div class="flex-container">

  <!-- PRIVACY-->
  <div  class="flex-item">
  <div style="font-weight:bold;font-size:x-large;"> Privacy</div>

  <p>
    The Christian Coder will never contact you because there is no login, thus no way to identify you. And app stores do not provide your identity.
  </p>

  <ul>
  <li>Free app</li>
  <li>No in-app purchases</li>
  <li>No online purchases</li>
  <li>No ads</li>
  <li>No user logins, tracking, or analytics</li>
  <li>No backend server access</li>
  </ul>
   
  </div>

  <!-- OPEN SOURCE -->
  <div class="flex-item">
  <div style="font-weight:bold;font-size:x-large;">Open source</div>
   <p>
     The Christian Coder uses the <a href="https://unlicense.org" target="cco">Unlicense template</a> providing for a free and unencumbered software release into the public domain. Such a license encourages the wealth of shared knowledge and a creative culture.
   </p>

  <p>
    View the Unlicense agreements for the <a href="https://github.com/christian-coder-org/bible-reader/blob/main/UNLICENSE.md" target="cco">Bible Reader app</a> and the <a href="https://github.com/christian-coder-org/website/blob/main/UNLICENSE.md" target="cco">Christian Coder website</a>.
  </p>
  <ul>
  <li>100% open source</li>
  <li>Source code open to public auditing</li>
  <li>Unlicense dedication to the public domain</li>
  </ul>
  </div>

</div>




<!-- The indentation that follows is important or you get an error -->
## Quick look

The Bible Reader app was designed to be simple. The act of reading the Bible, as opposed to listening to someone reading it, allows the user's mind to float back-and-forth between verses as they read. This enhances the reader's understanding of the text. Controls and widgets just seem to get in the way.

<div class="flex-container">
 <!-- BIBLES & BOOKS -->
 <div class="flex-item2">
 <div style="font-weight:bold;font-size:x-large;">Bibles & Books</div>

  <p style="max-width:320px;">
    Select a Bible (there are twelve editions) using the icon in the upper right corner. Then select any book from either the Old or New Testaments.
  </p>

  <!--div>Bible selections<img src="./bibles.png" style="width:300px;margin-right:20px;"></div-->
  <div><img src="/home.png" style="width:250px;margin-right:20px;border:1px solid grey;border-radius:.5em;"></div>
  </div>

  <!-- CHAPTERS -->
  <div class="flex-item2">
  <div style="font-weight:bold;font-size:x-large;">Chapters</div>

  <p style="max-width:320px;">
    Easily move between chapters of a book. Use the icon in the upper right corner or the paginator in hte page footer. Click on a verse to compare with other Bible editions.
  </p>

  <div><img src="/reader.png" style="width:250px;margin-right:20px;border:1px solid grey;border-radius:.5em;"></div>
  </div>

  <!-- COMPARE VERSION -->
  <div class="flex-item2">
  <div style="font-weight:bold;font-size:x-large;">Compare verses</div>

  <p style="max-width:320px;">
    The verse from all Bible editions are shown with the Bible edition you are reading in highlighted text.
  </p>

  <div><img src="/reader.png" style="width:250px;margin-right:20px;border:1px solid grey;border-radius:.5em;"></div>
  </div>
</div>

<style>

.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

.flex-item {
    flex: 1 1 calc(50% - 20px);
    padding: 20px;
    min-width:320px;
}

.flex-item2 {
    flex: 1 1 calc(33.333% - 20px);
    padding: 20px;
    min-width:320px;
}
</style>