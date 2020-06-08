import { shallowMount, enableAutoDestroy } from '@vue/test-utils';
import Moveable from 'moveable';
import VueMoveable from '../Moveable.vue';

jest.mock('moveable');

enableAutoDestroy(afterEach);

beforeEach(jest.clearAllMocks);


describe('Moveable.vue', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(VueMoveable);
    expect(wrapper.html()).toContain('<div></div>');
  });

  it('creates the instance of Moveable', () => {
    shallowMount(VueMoveable);
    expect(Moveable).toHaveBeenCalledTimes(1);
  });

  it('passes container as a first arg to Moveable when supplied', () => {
    const container = document.createElement('div');
    shallowMount(VueMoveable, {
      propsData: {
        container,
      },
    });
    expect(Moveable).toHaveBeenCalledWith(container, expect.any(Object));
  });

  it('passes document.body as a first arg to Moveable when container is not supplied', () => {
    shallowMount(VueMoveable);
    expect(Moveable).toHaveBeenCalledWith(document.body, expect.any(Object));
  });
});
