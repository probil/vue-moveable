

<p align="middle" ><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/logo.png"/></p>
<h2 align="middle">Vue Moveable</h2>
<p align="middle">
    <a href="https://www.npmjs.com/package/moveable" target="_blank">
      <img src="https://img.shields.io/npm/v/vue-moveable.svg?style=flat-square&color=007acc&label=version"
           alt="npm version" /></a>
    <a href="https://github.com/probil/vue-moveable" target="_blank">
      <img
        src="https://img.shields.io/github/stars/probil/vue-moveable.svg?color=42b883&style=flat-square"
        alt="github stars"/></a>
    <a href="https://github.com/probil/vue-moveable/blob/master/LICENSE" target="_blank">
      <img
        src="https://img.shields.io/github/license/probil/vue-moveable.svg?style=flat-square&label=license&color=08CE5D"
        alt="license"
      />
    </a>
    <img src="https://img.shields.io/bundlephobia/minzip/vue-moveable?style=flat-square" alt="Minified library size">
    <a href="https://github.com/daybrush/moveable/tree/master/packages/react-moveable" target="_blank"><img
      alt="React"
      src="https://img.shields.io/static/v1.svg?label=&message=React&style=flat-square&color=61daeb"></a>
    <a href="https://github.com/daybrush/moveable/tree/master/packages/preact-moveable" target="_blank"><img
      alt="Preact"
      src="https://img.shields.io/static/v1.svg?label=&message=Preact&style=flat-square&color=673ab8"></a>
    <a href="https://github.com/daybrush/moveable/tree/master/packages/ngx-moveable" target="_blank">
    <img alt="Angular" src="https://img.shields.io/static/v1.svg?label=&message=Angular&style=flat-square&color=C82B38">
    </a>
    <a href="https://github.com/probil/vue-moveable" target="_blank"><img
      alt="Vue"
      src="https://img.shields.io/static/v1.svg?label=&message=Vue&style=flat-square&color=3fb984"></a>
</p>
<p align="middle">A Vue Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable, Pinchable, Groupable, Snappable.</p>
<p align="middle"><a href="https://codesandbox.io/s/vue-template-zthzj?fontsize=14"><img src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="Edit Vue Moveable Demo"></a></p>
<table width="100%" align="center">
<tr>
<th colspan="4">Moveable</th>
</tr>
<tr>
<td align="center"><strong>Draggable</strong></td>
<td align="center"><strong>Resizable</strong></td>
<td align="center"><strong>Scalable</strong></td>
<td align="center"><strong>Rotatable</strong></td>
</tr>
<tr>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/draggable.gif">
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/resizable.gif">
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/scalable.gif">
</td>
<td align="center">
<img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/rotatable.gif">
</td>
</tr>
<tr>
<td align="center"><strong>Warpable</strong></td>
<td align="center"><strong>Pinchable</strong></td>
<td align="center"><strong>Groupable</strong></td>
<td align="center"><strong>Snappable</strong></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/warpable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/pinchable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/groupable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/snappable.gif"></td>
</tr>
<tr>
<td align="center"><strong>Clippable</strong></td>
<td align="center"><strong>Roundable</strong></td>
<td align="center"><strong>OriginDraggable</strong></td>
<td align="center"><strong>Selecto</strong></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/clippable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/roundable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/origindraggable.gif"></td>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/selecto.gif"></td>
</tr>
</table>


## 🔥 Features
* **Draggable** refers to the ability to drag and move targets.
* **Resizable** indicates whether the target's width and height can be increased or decreased.
* **Scalable** indicates whether the target's x and y can be scale of transform.
* **Rotatable** indicates whether the target can be rotated.
* **Warpable** indicates whether the target can be warped (distorted, bented).
* **Pinchable** indicates whether the target can be pinched with draggable, resizable, scalable, rotatable.
* **Groupable** indicates Whether the targets can be moved in group with draggable, resizable, scalable, rotatable.
* **Snappable** indicates whether to snap to the guideline.
* **OriginDraggable*** indicates Whether to drag origin.
* **Clippable** indicates Whether to clip the target.
* **Roundable** indicates Whether to show and drag or double click border-radius.
* Support SVG Elements (svg, path, line, ellipse, g, rect, ...etc)
* Support Major Browsers
* Support 3d Transform

## ⚙️ Installation
```sh
$ npm i vue-moveable
```

## 📄 Documents
* [**Moveable Handbook**](https://github.com/daybrush/moveable/blob/master/handbook/handbook.md)
* [**How to use Group**](https://github.com/daybrush/moveable/blob/master/handbook/handbook.md#toc-group)
* [**How to use custom CSS**](https://github.com/daybrush/moveable/blob/master/handbook/handbook.md#toc-custom-css)
* [API Documentation](https://daybrush.com/moveable/release/latest/doc/)

## 🚀 How to use

```vue
<template>
  <Moveable
    class="moveable"
    v-bind="moveable"
    @drag="handleDrag"
    @resize="handleResize"
    @scale="handleScale"
    @rotate="handleRotate"
    @warp="handleWarp"
    @pinch="handlePinch"
  >
    <span>Vue Moveable</span>
  </Moveable>
</template>
<script>
import Moveable from 'vue-moveable';

export default {
  name: 'app',
  components: {
    Moveable,
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 0,
      resizable: false,
      throttleResize: 1,
      keepRatio: false,
      scalable: true,
      throttleScale: 0,
      rotatable: true,
      throttleRotate: 0,
      pinchable: true, // ["draggable", "resizable", "scalable", "rotatable"]
      origin: false,
    }
  }),
  methods: {
    handleDrag({ target, transform }) {
      console.log('onDrag left, top', transform);
      target.style.transform = transform;
    },
    handleResize({
      target, width, height, delta,
    }) {
      console.log('onResize', width, height);
      delta[0] && (target.style.width = `${width}px`);
      delta[1] && (target.style.height = `${height}px`);
    },
    handleScale({ target, transform, scale }) {
      console.log('onScale scale', scale);
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform }) {
      console.log('onRotate', dist);
      target.style.transform = transform;
    },
    handleWarp({ target, transform }) {
      console.log('onWarp', transform);
      target.style.transform = transform;
    },
    handlePinch({ target }) {
      console.log('onPinch', target);
    },
  }
}
</script>
```
### Calling moveable methods
All [moveable instance methods](https://daybrush.com/moveable/release/latest/doc/Moveable.html#methods) are supported. 
Just use reference to call them. 

E.g. `this.$refs.<moveable_ref>.<moveable_method>`.

Here is an example:
```vue
<template>
  <Moveable
    ref="moveable"
    class="moveable"
  >
    <span>Vue Moveable</span>
  </Moveable>
</template>
<script>
import Moveable from 'vue-moveable';

export default {
  name: 'app',
  components: {
    Moveable,
  },
  mounted() {
   console.log("getRect: ", this.$refs.moveable.getRect()); 
   // -> getRect: Object {width: 300, height: 200, left: 127, top: 120.5, pos1: Array[2]…}
   console.log("isMoveableElement: ", this.$refs.moveable.isMoveableElement(document.body));
   // -> isMoveableElement: false

  },
}
</script>
```
Demo: https://codesandbox.io/s/vue-moveable-issue-84-xzblq

## Polyfills

Library use few browser built-ins and *doesn't* include polyfills for them. This ensures you don't include unnecessary polyfills in your code, as it should be the responsibility of the consuming app to include them.

[Vue CLI includes them in babel config by default](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app#polyfills) but here is a list (in case you what to add them manually):
```
# for core-js@2
es6.array.filter
es6.object.keys
es6.symbol        # optional

# for core-js@3
es.array.filter
es.object.keys
es.symbol         # optional
```

For direct usage in browser consider using https://polyfill.io/v3/


## ⚙️ Developments
### `npm run serve`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



## ⭐️ Show Your Support
Please give a ⭐️ if this project helped you!


## 👏 Contributing

If you have any questions or requests or want to contribute to `vue-moveable` or other packages, please write the [issue](https://github.com/probil/vue-moveable/issues) or give me a Pull Request freely.

## 🐞 Bug Report

If you find a bug, please report to us opening a new [Issue](https://github.com/probil/vue-moveable/issues) on GitHub.


## 📝 License

This project is [MIT](https://github.com/probil/vue-moveable/blob/master/LICENSE) licensed.
