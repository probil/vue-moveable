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
        @warp="handleWarp"
      >
        <span>Vue Moveable</span>
      </Moveable>
      <div class="buttons able">
        <a
          href="#"
          v-for="(state, key) in states"
          :key="key"
          :class="{ selected: currentState === key }"
          @click="currentState = key"
        >{{ state }}</a>
      </div>
      <Badges />
      <p class="description">Vue Moveable is Draggable! Resizable! Scalable! Rotatable!</p>
      <div class="buttons">
        <a href="https://github.com/probil/vue-moveable" target="_blank">Download</a>
        <a href="https://daybrush.com/moveable/release/latest/doc/" target="_blank">API</a>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-param-reassign,no-unused-expressions,no-console */
import Moveable from '@/components/Moveable.vue';
import Badges from '@/components/Badges.vue';

export default {
  name: 'app',
  components: {
    Moveable,
    Badges,
  },
  data: () => ({
    moveable: {
      draggable: true,
      throttleDrag: 1,
      resizable: false,
      throttleResize: 1,
      keepRatio: true,
      scalable: true,
      throttleScale: 0.01,
      rotatable: true,
      throttleRotate: 0.2,
      pinchable: true,
    },
    states: {
      scalable: 'Scalable',
      resizable: 'Resizable',
      warpable: 'Warpable',
    },
    currentState: 'scalable',
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
    clearAllStates() {
      Object.keys(this.states).forEach((key) => {
        this.moveable[key] = false;
      });
    },
  },
  watch: {
    currentState(newState) {
      this.clearAllStates();
      this.moveable[newState] = true;
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
    width: 300px;
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

  .buttons.able {
    margin-top: 16px;
  }
  .buttons.able a {
    min-width: auto;
    padding: 8px 20px;
  }
  .buttons {
    text-align: center;
    margin: 0;
    padding: 10px;
  }

  .buttons a {
    position: relative;
    text-decoration: none;
    color: #333;
    border: 1px solid #333;
    padding: 12px 30px;
    min-width: 140px;
    text-align: center;
    display: inline-block;
    box-sizing: border-box;
    margin: 5px;
    transition: all ease 0.5s;
  }

  .buttons a:hover, .buttons a.selected {
    background: #333;
    color: #fff;
  }
</style>
