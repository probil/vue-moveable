import { mount } from 'cypress-vue-unit-test';
import Moveable from '../../src/components/Moveable.vue';

const mountMoveble = (props = {}) => {
  const template = `
    <Moveable class="moveable" v-bind="$data" v-on="$listeners">
      <span>Content</span>
    </Moveable>
  `;

  const style = `
    .moveable {
      position: relative;
      width: 300px;
      height: 200px;
      text-align: center;
      font-size: 40px;
      margin: 0 auto;
    }`;

  const data = () => props;

  return mount({
    template,
    data,
    components: {
      Moveable,
    },

  }, {
    style,
  });
};

describe('Moveable', () => {
  it('Renders', () => {
    mountMoveble();
    cy.get('.moveable').should('contain.text', 'Content').then(() => {
      Cypress.vue.$destroy();
    });
  });
  describe('Resizable', () => {
    it('Enables resizable mode when `resizable` prop passed as true', () => {
      mountMoveble({
        resizable: true,
      });
      cy.get('.moveable-control.moveable-direction').should('exist');
      cy.get('.moveable-control.moveable-direction').should('have.length', 8)
        .then(() => {
          Cypress.vue.$destroy();
        });
    });
    it('Doesn\'t enable resizable mode when `resizable` prop passed as false', () => {
      cy.get('.moveable').should('not.exist');
      mountMoveble({
        resizable: false,
      });
      cy.get('.moveable').should('exist');
      cy.get('.moveable-control.moveable-direction').should('not.exist')
        .then(() => {
          Cypress.vue.$destroy();
        });
    });
  });
});
