import { mountMoveable } from '../support/utils.js'

describe('General', () => {
  beforeEach(mountMoveable());

  it('renders', () => {
    cy.contains('Moveable');
  });
});
