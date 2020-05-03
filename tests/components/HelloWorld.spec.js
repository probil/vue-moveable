import { mount } from 'cypress-vue-unit-test';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('Works awesomely', () => {
    mount(HelloWorld);
    cy.get('[data-testid=hello-world-title]').should('exist');
  });
});
