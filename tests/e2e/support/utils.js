import mountVue from "cypress-vue-unit-test";

export const mountMoveable = (props = {}, eventListeners = {}) => {
  return mountVue({
    template: `
      <div class="container" ref="container">
        <Moveable v-bind="$data" v-on="listeners" class="moveable">
          <span>Moveable</span>
        </Moveable>
      </div>
    `,
    data: () => ({
      ...props
    }),
    computed: {
      listeners() {
        return eventListeners
      }
    },
  }, {
    extensions: {
      components: {
        Moveable: require("../../../src/components/Moveable.vue").default,
      },
    },
    html: `
    <style>
      .container {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      .moveable span {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        white-space: nowrap;
      }
     .moveable {
        position: relative;
        width: 300px;
        height: 200px;
        text-align: center;
        font-size: 40px;
        margin: 0 auto;
     }
    </style>
    <div id="app"></div>
    `
  })
};
