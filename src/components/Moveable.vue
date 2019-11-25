<template>
  <div>
    <slot/>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Moveable from 'moveable';

const MOVEABLE_EVENTS = [
  'click',
  'clickGroup',

  'drag',
  'dragEnd',
  'dragStart',
  'dragGroup',
  'dragGroupEnd',
  'dragGroupStart',

  'pinch',
  'pinchEnd',
  'pinchGroup',
  'pinchGroupEnd',
  'pinchGroupStart',
  'pinchStart',

  'render',
  'renderEnd',
  'renderGroup',
  'renderGroupEnd',
  'renderGroupStart',
  'renderStart',

  'resize',
  'resizeEnd',
  'resizeGroup',
  'resizeGroupEnd',
  'resizeGroupStart',
  'resizeStart',

  'rotate',
  'rotateEnd',
  'rotateGroup',
  'rotateGroupEnd',
  'rotateGroupStart',
  'rotateStart',

  'scale',
  'scaleEnd',
  'scaleGroup',
  'scaleGroupEnd',
  'scaleGroupStart',
  'scaleStart',

  'scroll',
  'scrollGroup',

  'warp',
  'warpEnd',
  'warpStart',
];

const MOVEABLE_PROPS = [
  'draggable',
  'resizable',
  'scalable',
  'rotatable',
  'warpable',
  'pinchable',
  'snappable',
  'ables',
  'origin',
  'className',
  'throttleDrag',
  'throttleResize',
  'throttleScale',
  'throttleRotate',
  'keepRatio',
  'edge',
  'pinchThreshold',
  'snapCenter',
  'snapThreshold',
  'horizontalGuidelines',
  'verticalGuidelines',
  'elementGuidelines',
  'bounds',
  'dragArea',
  'rotationPosition',
  'baseDirection',
  'renderDirections',
  'scrollable',
  'scrollThreshold',
  'getScrollPosition',
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
    snappable: [Boolean, Array],
    ables: Array,
    origin: Boolean,
    container: {
      type: [HTMLElement, SVGElement],
      default: () => document.body,
    },
    throttleDrag: Number,
    throttleResize: Number,
    throttleScale: Number,
    throttleRotate: Number,
    keepRatio: Boolean,
    edge: Boolean,
    pinchThreshold: Number,
    snapCenter: Boolean,
    snapThreshold: Number,
    horizontalGuidelines: Array,
    verticalGuidelines: Array,
    elementGuidelines: Array,
    bounds: Object,
    dragArea: Boolean,
    rotationPosition: String,
    baseDirection: Array,
    renderDirections: Array,
    scrollable: Boolean,
    scrollContainer: [HTMLElement, SVGElement],
    scrollThreshold: Number,
    getScrollPosition: Function,
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
    MOVEABLE_EVENTS.forEach(event => (
      this.moveable.on(event, this.$emit.bind(this, event))
    ));
    window.addEventListener('resize', this.updateRec, { passive: true });
  },
  watch: {
    ...watchMoveableProps(),
  },
  beforeDestroy() {
    MOVEABLE_EVENTS.forEach(event => (
      this.moveable.off(event, this.$emit.bind(this, event))
    ));
    window.removeEventListener('resize', this.updateRec);
    this.moveable.destroy();
  },
};
</script>
