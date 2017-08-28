import Vue from 'vue';
import Anniversaries from '@/components/Anniversaries';

describe('Anniversaries.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Anniversaries);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.anniversaries h2').textContent)
      .to.equal('Anniversaries');
  });
});
