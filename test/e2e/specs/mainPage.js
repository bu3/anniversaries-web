// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Home page': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;
    const homePage = browser.page.homePage();

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000);

    homePage.expect.element('@anniversariesTitle').text.to.contain('Anniversaries');
    browser.elements('css selector', homePage.props.anniversaryLocator, (result) => {
      browser.assert.equal(result.value.length, 2);
    });
    homePage.expect.element('@firstAnniversary').text.to.contain('Fabio - 01/11/2017');
    homePage.expect.element('@secondAnniversary').text.to.contain('Another Pivot - 01/11/2017');

    browser.end();
  },
};
