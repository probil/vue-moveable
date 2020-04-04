<template>
  <div>
    <slot/>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Moveable, { EVENTS, PROPERTIES, METHODS } from 'moveable';

const watchReactiveProp = (key, deep) => ({
  handler(newValue) {
    const existingValue = this.moveable[key];
    if (existingValue === newValue) return;
    this.moveable[key] = newValue;
  },
  deep,
});

const watchMoveableProps = () => PROPERTIES.reduce((acc, prop) => {
  acc[prop] = watchReactiveProp(prop, true);
  return acc;
}, {});

const methodMap = {};

METHODS.forEach((name) => {
  methodMap[name] = function func(...args) {
    return this.moveable[name](...args);
  };
});

export default {
  name: 'Moveable',
  inheritAttrs: false,
  props: {
    snappable: [Boolean, Array],
    snapCenter: Boolean,
    snapHorizontal: Boolean,
    snapVertical: Boolean,
    snapElement: Boolean,
    snapGap: Boolean,
    snapThreshold: Number,
    snapDigit: Number,
    isDisplaySnapDigit: Boolean,
    horizontalGuidelines: Array,
    verticalGuidelines: Array,
    elementGuidelines: Array,
    bounds: Object,
    innerBounds: Object,
    defaultGroupRotate: Number,
    scrollable: Boolean,
    scrollContainer: [HTMLElement, SVGElement],
    scrollThreshold: Number,
    getScrollPosition: Function,
    warpable: Boolean,
    renderDirections: Array,
    rotatable: Boolean,
    rotationPosition: String,
    throttleRotate: Number,
    pinchable: [Boolean, Array],
    scalable: Boolean,
    throttleScale: Number,
    keepRatio: Boolean,
    resizable: Boolean,
    throttleResize: Number,
    baseDirection: Array,
    draggable: Boolean,
    throttleDrag: Number,
    throttleDragRotate: Number,
    container: {
      type: [HTMLElement, SVGElement],
      default: () => document.body,
    },
    rootContainer: HTMLElement,
    dragArea: Boolean,
    origin: Boolean,
    zoom: Number,
    transformOrigin: [Array, String],
    edge: Boolean,
    ables: Array,
    className: String,
    pinchThreshold: Number,
    triggerAblesSimultaneously: Boolean,
  },
  methods: methodMap,
  mounted() {
    this.moveable = new Moveable(this.$props.container, {
      ...this.$props,
      target: this.$el,
    });
    EVENTS.forEach((event) => (
      this.moveable.on(event, this.$emit.bind(this, event))
    ));
    window.addEventListener('resize', this.updateRect, { passive: true });
  },
  watch: {
    ...watchMoveableProps(),
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateRect);
    this.moveable.destroy();
  },
};
</script>
