const anniversaryLocator = 'li.anniversary';

module.exports = {
  props: {
    anniversaryLocator,
  },
  elements: {
    addEmployeeButton: 'button[class="navButton"]',
    anniversariesTitle: 'h2',
    anniversaries: '.anniversaries',
    firstAnniversary: `${anniversaryLocator}:first-child`,
    secondAnniversary: `${anniversaryLocator}:nth-child(2)`,
    thirdAnniversary: `${anniversaryLocator}:nth-child(3)`,
    thirdAnniversaryPicture: `${anniversaryLocator}:nth-child(3) img`,
  },
};
