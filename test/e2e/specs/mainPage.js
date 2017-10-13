// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Home page': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.anniversaries')
      .assert.containsText('h2', 'Anniversaries')
      .assert.containsText('li.anniversary:first-child', 'Fabio - 2017-11-01')
      .assert.containsText('li.anniversary:nth-child(2)', 'Another Pivot - 2017-11-01')
      .end();
  },
};
