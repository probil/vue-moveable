import { mountMoveable } from '../support/utils.js'

describe('Scalable', () => {
  beforeEach(mountMoveable({
    scalable: true
  }));

  it('shows ', () => {
    cy.contains('Moveable');
  });
});
