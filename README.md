# \<slick-login>

## Description

<p align="center">
  <img src="https://user-images.githubusercontent.com/59962729/134505863-843ffafb-46ec-470d-b21d-68c79f75248c.png">
</p>

An authentication card that return's an event with a payload that contains both input's content. The web component was made using lit element.

## Installation
```bash
npm i @slickteam/slick-login
```

## Usage

- **Html vanilla**

```html
<script type="module">
  import '@slickteam/slick-login';
</script>

<slick-login></slick-login>
```

- **Vue.js**

```html
<template>
  <div>
    <h1>Test Page</h1>
    <slick-login
        :imgSrc="image"
    ></slick-login>
  </div>
</template>

<script>
import '@slickteam/slick-login';
import image from './path/to/image/file'

export default {
  name: 'TestPage', 
  data() {
      return {
          image: image,
      }
  },
}
</script>

<style scoped>
/* Put CSS */
</style>

```

### Template

``` html
    <slick-login
      showConsoleHelp
      firstLabel="First input's label"
      secondLabel="Second input's label"
      buttonText="Button's text"
      hideLogo
      imgSrc
    ></slick-login>
```
### Properties

Name                | Type               | Description
---                 | ---                | ---
`showConsoleHelp`   | Boolean            | Show hints about event and payload status
`firstLabel`        | String             | Define label text of the first input
`secondLabel`       | String             | Define label text of the second input
`buttonText`        | String             | Define button's text
`hideLogo`          | Boolean            | Hide the logo header div if not needed
`imgSrc`            | String             | The path to the image that will be displayed as the header

### Events

Name            | Description
---             | ---
`slick-connect` | The event emitted when the button is clicked, it returns the content of both inputs

## Development

### Demoing with Storybook

To run a local instance of Storybook for your component, run
```bash
npm run storybook
```

To build a production version of Storybook, run
```bash
npm run storybook:build
```