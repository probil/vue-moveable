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
    draggable: Boolean,
    resizable: Boolean,
    scalable: Boolean,
    rotatable: Boolean,
    warpable: Boolean,
    pinchable: [Boolean, Array],
    snappable: [Boolean, Array],
    ables: Array,
    origin: Boolean,
    className: String,
    container: {
      type: [HTMLElement, SVGElement],
      default: () => document.body,
    },
    throttleDrag: Number,
    throttleDragRotate: Number,
    throttleResize: Number,
    throttleScale: Number,
    throttleRotate: Number,
    keepRatio: Boolean,
    edge: Boolean,
    pinchThreshold: Number,
    snapCenter: Boolean,
    snapVertical: Boolean,
    snapHorizontal: Boolean,
    snapElement: Boolean,
    snapThreshold: Number,
    horizontalGuidelines: Array,
    verticalGuidelines: Array,
    elementGuidelines: Array,
    bounds: Object,
    dragArea: Boolean,
    rotationPosition: String,
    baseDirection: Array,
    renderDirections: Array,
    defaultGroupRotate: Boolean,
    scrollable: Boolean,
    scrollContainer: [HTMLElement, SVGElement],
    scrollThreshold: Number,
    getScrollPosition: Function,
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
