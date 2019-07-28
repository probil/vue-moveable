<template>
  <div>
    <slot/>
  </div>
</template>
<script>
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
  'rotateEnd'
];

export default {
  name: 'Movable',
  inheritAttrs: false,
  props: {
    draggable: Boolean,
    resizable: Boolean,
    scalable: Boolean,
    rotatable: Boolean,
    origin: Boolean,
    throttleDrag: Number,
    throttleResize: Number,
    throttleScale: Number,
    throttleRotate: Number,
    keepRatio: Boolean,
  },
  mounted() {
    this.moveable = new Moveable(document.body, {
      ...this.$props,
      target: this.$el,
    });
    ALLOWED_EVENTS.forEach(event => (
      this.moveable.on(event, this.$emit.bind(this, event))
    ));
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
};
</script>
