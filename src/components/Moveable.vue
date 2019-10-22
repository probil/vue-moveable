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

const MOVEABLE_PROPS = [
  'draggable',
  'keepRatio',
  'origin',
  'pinchable',
  'resizable',
  'rotatable',
  'scalable',
  'throttleDrag',
  'throttleResize',
  'throttleScale',
  'throttleRotate',
  'warpable',
];

const watchReactiveProp = (key, deep) => ({
  handler(newValue) {
    const existingValue = this.moveable[key];
    if (existingValue === newValue) return;
    this.moveable[key] = newValue;
  },
  deep,
});

const watchMoveableProps = () => MOVEABLE_PROPS.reduce((acc, prop) => {
  acc[prop] = watchReactiveProp(prop, true);
  return acc;
}, {});

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
    ...watchMoveableProps(),
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
