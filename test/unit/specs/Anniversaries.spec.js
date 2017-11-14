import Vue from 'vue';
import Anniversaries from '@/components/Anniversaries';

describe('Anniversaries.vue', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });
  afterEach(() => {
    sandbox.restore();
  });

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Anniversaries);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.anniversaries h2').textContent).to.equal('Anniversaries');
  });
});
