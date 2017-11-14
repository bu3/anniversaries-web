import Vue from 'vue';
import AnniversaryService from '@/anniversaries/service';

describe('Anniversaries service', () => {
  let sandbox;
  let httpMock;
  beforeEach(() => {
    sandbox = sinon.sandbox.create();
    httpMock = sandbox.stub(Vue.http, 'get');
  });
  afterEach(() => {
    sandbox.restore();
  });
  it('should load anniversaries', () => {
    const expectedAnniversaries = [{
      id: 91,
      employeeId: 4,
      name: 'Sempronio',
      hireDate: '2015-12-01',
      anniversaryDate: '2017-12-01',
      photoURL: 'aUrl',
    },
    ];
    httpMock.withArgs(`${Vue.config.apiServer}/anniversaries`).returns(Promise.resolve(
      {
        body: expectedAnniversaries,
      }));
    AnniversaryService.load().then((anniversaries) => {
      expect(httpMock.called).to.equal(true);
      expect(anniversaries).to.equal(expectedAnniversaries);
    });
  });

  it('should load anniversaries filtered by months', () => {
    const expectedAnniversaries = [{
      id: 91,
      employeeId: 4,
      name: 'Sempronio',
      hireDate: '2015-12-01',
      anniversaryDate: '2017-12-01',
      photoURL: 'aUrl',
    },
    ];
    httpMock.withArgs(`${Vue.config.apiServer}/anniversaries`, { params: { months: 6 } }).returns(Promise.resolve(
      {
        body: expectedAnniversaries,
      }));
    AnniversaryService.load(6).then((anniversaries) => {
      expect(httpMock.called).to.equal(true);
      expect(anniversaries).to.equal(expectedAnniversaries);
    });
  });
});
