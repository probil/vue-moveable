<template>
  <div>
    <slot/>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Moveable from 'moveable';

const ALLOWED_EVENTS = [
  'dragStart',
  'drag',
  'dragEnd',
  'resizeStart',
  'resize',
  'resizeEnd',
  'scaleStart',
  'scale',
  'scaleEnd',
  'rotateStart',
  'rotate',
  'rotateEnd',
  'warpStart',
  'warp',
  'warpEnd',
  'pinchStart',
  'pinch',
  'pinchEnd',
];

export default {
  name: 'Moveable',
  inheritAttrs: false,
  props: {
    draggable: Boolean,
    resizable: Boolean,
    scalable: Boolean,
    rotatable: Boolean,
    warpable: Boolean,
    pinchable: [Boolean, Array],
    origin: Boolean,
    throttleDrag: Number,
    throttleResize: Number,
    throttleScale: Number,
    throttleRotate: Number,
    keepRatio: Boolean,
    container: {
      type: [HTMLElement, SVGElement],
      default: () => document.body,
    },
  },
  methods: {
    updateRec() {
      this.moveable.updateRect();
    },
  },
  mounted() {
    this.moveable = new Moveable(this.$props.container, {
      ...this.$props,
      target: this.$el,
    });
    ALLOWED_EVENTS.forEach(event => (
      this.moveable.on(event, this.$emit.bind(this, event))
    ));
    window.addEventListener('resize', this.updateRec, { passive: true });
  },
  watch: {
    $props: {
      handler(newOptions) {
        Object.keys(newOptions).forEach((key) => {
          const existingValue = this.moveable[key];
          const newValue = newOptions[key];
          if (existingValue === newValue) return;
          this.moveable[key] = newOptions[key];
        });
      },
      deep: true,
    },
  },
  beforeDestroy() {
    ALLOWED_EVENTS.forEach(event => (
      this.moveable.off(event, this.$emit.bind(this, event))
    ));
    window.removeEventListener('resize', this.updateRec);
    this.moveable.destroy();
  },
};
</script>
