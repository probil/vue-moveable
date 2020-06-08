import { shallowMount } from '@vue/test-utils';
import Moveable from '../Moveable.vue';

describe('Moveable.vue', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(Moveable);
    expect(wrapper.html()).toContain('<div></div>');
  });
});
