<template>
  <div>
    <slot/>
  </div>
</template>
<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Moveable, { EVENTS, PROPERTIES, METHODS } from 'moveable';

console.log(PROPERTIES);

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
    roundable: Boolean,
    roundRelative: Boolean,
    originDraggable: Boolean,
    originRelative: Boolean,
    clippable: Boolean,
    customClipPath: String,
    defaultClipPath: String,
    clipRelative: Boolean,
    dragWithClip: Boolean,
    clipArea: Boolean,
    defaultGroupOrigin: String,
    cspNonce: String,
    checkInput: Boolean,
    groupable: Boolean,
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
    snapDistFormat: Function,
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
    startDragRotate: Number,
    dragTarget: [HTMLElement, SVGElement],
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
    pinchOutside: Boolean,
    triggerAblesSimultaneously: Boolean,
    padding: Object, // { left: number, top: number, right: number, bottom: number }
  },
  methods: methodMap,
  mounted() {
    this.moveable = new Moveable(this.$props.container, {
      ...this.$props,
      target: this.$el,
    });
    EVENTS.forEach((event) => {
      const kebabCaseEvent = event.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
      this.moveable.on(event, this.$emit.bind(this, kebabCaseEvent));
      // Backwards support for camelCase events
      this.moveable.on(event, this.$emit.bind(this, event));
    });
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
