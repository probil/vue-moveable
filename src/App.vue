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
// eslint-disable-next-line import/no-extraneous-dependencies
import { Frame } from 'scenejs';
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
      keepRatio: false,
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
      this.$frame.set('left', `${left}px`);
      this.$frame.set('top', `${top}px`);
      this.setTransform(target);
    },
    handleResize({ target, width, height }) {
      console.log('onResize', width, height);
      this.$frame.set('width', `${width}px`);
      this.$frame.set('height', `${height}px`);
      this.setTransform(target);
    },
    handleScale({ target, scale, dist }) {
      console.log('onScale scale', scale);
      const scaleX = this.$frame.get('transform', 'scaleX') * dist[0];
      const scaleY = this.$frame.get('transform', 'scaleY') * dist[1];
      this.$frame.set('transform', 'scaleX', scaleX);
      this.$frame.set('transform', 'scaleY', scaleY);
      this.setTransform(target);
    },
    handleRotate({ target, dist, beforeDelta }) {
      console.log('onRotate', dist);
      const deg = parseFloat(this.$frame.get('transform', 'rotate')) + beforeDelta;
      this.$frame.set('transform', 'rotate', `${deg}deg`);
      this.setTransform(target);
    },
    handleWarp({ target, delta, multiply }) {
      console.log('onWarp', target);
      this.$frame.set('transform', 'matrix3d', multiply(this.$frame.get('transform', 'matrix3d'), delta));
      this.setTransform(target);
    },
    clearAllStates() {
      Object.keys(this.states).forEach((key) => {
        this.moveable[key] = false;
      });
    },
    setTransform(target) {
      target.style.cssText = this.$frame.toCSS();
    },
  },
  watch: {
    currentState(newState) {
      this.clearAllStates();
      this.moveable[newState] = true;
    },
  },
  mounted() {
    this.$frame = new Frame({
      width: '250px',
      height: '200px',
      left: '0px',
      top: '0px',
      transform: {
        rotate: '0deg',
        scaleX: 1,
        scaleY: 1,
        matrix3d: [
          1, 0, 0, 0,
          0, 1, 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1,
        ],
      },
    });
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
  .page.main {
    z-index: 1;
    min-height: 700px;
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
