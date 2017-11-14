import Vue from 'vue';

const AnniversaryService = {
  load(months) {
    const params = months && months > 0 ? { params: { months } } : {};
    return Vue.http.get(`${Vue.config.apiServer}/anniversaries`, params);
  },
};

export default AnniversaryService;
