// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Save new employee': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    // default: http://localhost:8080
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .click('button[class="navButton"]')
      .pause(5000)
      .waitForElementVisible('#addEmployee', 5000)
      .assert.containsText('h1', 'Add new employee')
      .setValue('input.name', 'Anco Marzio')
      .setValue('input.hiringDate', '2017-01-01')
      .click('button[class="saveBtn"]')
      .waitForElementVisible('#app', 5000)
      .assert.containsText('li:nth-child(3)', 'Anco Marzio - 2018-01-01')
      .end();
  },
};
