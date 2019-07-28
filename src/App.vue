<template>
  <div class="page main">
    <div class="container">
      <Moveable
        class="moveable"
        v-bind="moveable"
        @drag="handleDrag"
        @resize="handleResize"
        @scale="handleScale"
        @rotate="handleRotate"
      >
        <span>Moveable</span>
      </Moveable>
      <p class="description">Moveable is Draggable! Resizable! Scalable! Rotatable!</p>
    </div>
  </div>
</template>

<script>
import Moveable from '@/components/Moveable.vue';

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
      // eslint-disable-next-line no-param-reassign
      target.style.left = `${left}px`;
      // eslint-disable-next-line no-param-reassign
      target.style.top = `${top}px`;
    },
    handleResize({
      target, width, height, delta,
    }) {
      console.log('onResize', target);
      // eslint-disable-next-line no-param-reassign,no-unused-expressions
      delta[0] && (target.style.width = `${width}px`);
      // eslint-disable-next-line no-param-reassign,no-unused-expressions
      delta[1] && (target.style.height = `${height}px`);
    },
    handleScale({ target, transform, scale }) {
      console.log('onScale scale', scale);
      // eslint-disable-next-line no-param-reassign
      target.style.transform = transform;
    },
    handleRotate({ target, dist, transform }) {
      console.log('onRotate', dist);
      // eslint-disable-next-line no-param-reassign
      target.style.transform = transform;
    },
  },
};
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Roboto:100&display=swap");
  html, body {
    font-family: "Open Sans", sans-serif;
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    color: #333;
    letter-spacing: 1px;
    background: #f5f5f5;
    font-weight: 300;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  .page {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .page:nth-child(2n) {
    background: #f0f0f0;
  }

  .container {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .moveable {
    font-family: "Roboto", sans-serif;
    position: relative;
    width: 250px;
    height: 200px;
    text-align: center;
    font-size: 40px;
    margin: 0 auto;
    font-weight: 100;
    letter-spacing: 1px;
  }

  .moveable span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
  }

  .description {
    text-align: center;
  }
</style>
