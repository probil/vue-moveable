

<p align="middle" ><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/logo.png"/></p>
<h2 align="middle">Vue Moveable</h2>
<p align="middle">
<a href="https://www.npmjs.com/package/vue-moveable" target="_blank"><img src="https://img.shields.io/npm/v/vue-moveable.svg?style=flat-square&color=007acc&label=version" alt="npm version" /></a>
<a href="https://github.com/probil/vue-moveable/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/probil/vue-moveable.svg?style=flat-square&label=license&color=08CE5D"/></a>
</p>
<p align="middle">A Vue Component that create Moveable, Draggable, Resizable, Scalable, Rotatable, Warpable.</p>

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
<td align="center"><strong></strong></td>
<td align="center"><strong></strong></td>
<td align="center"><strong></strong></td>
</tr>
<tr>
<td align="center"><img src="https://raw.githubusercontent.com/daybrush/moveable/master/demo/images/warpable.gif"></td>
<td align="center"><strong></strong></td>
<td align="center"><strong></strong></td>
<td align="center"><strong></strong></td>
</tr>
</table>


## ⚙️ Installation
```sh
$ npm i vue-moveable
```

## 📄 Documents
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
      keepRatio: true,
      scalable: true,
      throttleScale: 0,
      rotatable: true,
      throttleRotate: 0,
    },
  }),
  methods: {
    handleDrag({ target, left, top }) {
      console.log('onDrag left, top', left, top);
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
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
      console.log('onWarp', target);
      target.style.transform = transform;
    },
  },
}
</script>
```


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
