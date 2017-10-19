// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'Save new employee': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    const saveEmployeePage = browser.page.saveEmployeePage();
    const homePage = browser.page.homePage();

    // default: http://localhost:8080
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000);

    homePage
      .click('button[class="navButton"]');

    browser
      .waitForElementVisible('#addEmployee', 5000);

    saveEmployeePage
      .expect.element('@title').text.to.contain('Add new employee');

    saveEmployeePage.setValue('@employeeName', 'Anco Marzio');
    saveEmployeePage.setValue('@employeeHiringDate', '2017-01-01');
    saveEmployeePage.setValue('@employeePictureUrl', 'https://www.spreadshirt.com/image-server/v1/mp/designs/1010111502,width=178,height=178/smile-icon-facebook.png');
    saveEmployeePage.click('@saveButton');

    browser.pause(1000).waitForElementVisible('#app', 5000);

    homePage.expect.element('@thirdAnniversary').text.to.contain('Anco Marzio - 2018-01-01');
    homePage.expect.element('@thirdAnniversaryPicture').to.have.attribute('src').which.contains('https://www.spreadshirt.com/image-server/v1/mp/designs/1010111502,width=178,height=178/smile-icon-facebook.png');

    browser.end();
  },
};
