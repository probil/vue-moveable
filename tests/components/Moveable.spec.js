import { mountCallback } from 'cypress-vue-unit-test';
import Moveable from '../../src/components/Moveable.vue';

const style = `
  .moveable {
    position: relative;
    width: 300px;
    height: 200px;
    text-align: center;
    font-size: 40px;
    margin: 0 auto;
  }`;

const template = `
  <Moveable class="moveable">
    <span>Content</span>
  </Moveable>
`;

describe('Moveable', () => {
  beforeEach(mountCallback({
    template,
    components: {
      Moveable,
    },
  }, { style }));
  it('Works', () => {
    cy.get('Content').should('exist');
  });
});
