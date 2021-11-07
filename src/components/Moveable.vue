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
    target: [HTMLElement, SVGElement],
    roundable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    roundRelative: {
      type: Boolean,
      required: false,
      default: undefined
    },
    originDraggable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    originRelative: {
      type: Boolean,
      required: false,
      default: undefined
    },
    clippable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    customClipPath: String,
    defaultClipPath: String,
    clipRelative: {
      type: Boolean,
      required: false,
      default: undefined
    },
    dragWithClip: {
      type: Boolean,
      required: false,
      default: undefined
    },
    clipArea: {
      type: Boolean,
      required: false,
      default: undefined
    },
    defaultGroupOrigin: String,
    cspNonce: String,
    checkInput: {
      type: Boolean,
      required: false,
      default: undefined
    },
    groupable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    snappable: [Boolean, Array],
    snapCenter: {
      type: Boolean,
      required: false,
      default: undefined
    },
    snapHorizontal: {
      type: Boolean,
      required: false,
      default: undefined
    },
    snapVertical: {
      type: Boolean,
      required: false,
      default: undefined
    },
    snapElement: {
      type: Boolean,
      required: false,
      default: undefined
    },
    snapGap: {
      type: Boolean,
      required: false,
      default: undefined
    },
    snapThreshold: Number,
    snapDigit: Number,
    isDisplaySnapDigit: {
      type: Boolean,
      required: false,
      default: undefined
    },
    horizontalGuidelines: Array,
    verticalGuidelines: Array,
    elementGuidelines: Array,
    bounds: Object,
    innerBounds: Object,
    snapDistFormat: Function,
    defaultGroupRotate: Number,
    scrollable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    scrollContainer: [HTMLElement, SVGElement],
    scrollThreshold: Number,
    getScrollPosition: Function,
    warpable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    renderDirections: Array,
    rotatable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    rotationPosition: String,
    throttleRotate: Number,
    pinchable: [Boolean, Array],
    scalable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    throttleScale: Number,
    keepRatio: {
      type: Boolean,
      required: false,
      default: undefined
    },
    resizable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    throttleResize: Number,
    baseDirection: Array,
    draggable: {
      type: Boolean,
      required: false,
      default: undefined
    },
    throttleDrag: Number,
    throttleDragRotate: Number,
    startDragRotate: Number,
    dragTarget: [HTMLElement, SVGElement],
    container: {
      type: [HTMLElement, SVGElement],
      default: () => document.body,
    },
    rootContainer: HTMLElement,
    dragArea: {
      type: Boolean,
      required: false,
      default: undefined
    },
    origin: {
      type: Boolean,
      required: false,
      default: undefined
    },
    zoom: Number,
    transformOrigin: [Array, String],
    edge: {
      type: Boolean,
      required: false,
      default: undefined
    },
    ables: Array,
    className: String,
    pinchThreshold: Number,
    pinchOutside: {
      type: Boolean,
      required: false,
      default: undefined
    },
    triggerAblesSimultaneously: {
      type: Boolean,
      required: false,
      default: undefined
    },
    padding: Object, // { left: number, top: number, right: number, bottom: number }
  },
  methods: methodMap,
  mounted() {
    this.moveable = new Moveable(this.$props.container, {
      ...this.$props,
      target: this.target || this.$el,
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
