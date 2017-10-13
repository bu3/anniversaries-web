const anniversaryLocator = 'li.anniversary';

module.exports = {
  props: {
    anniversaryLocator,
  },
  elements: {
    anniversariesTitle: 'h2',
    anniversaries: '.anniversaries',
    firstAnniversary: `${anniversaryLocator}:first-child`,
    secondAnniversary: `${anniversaryLocator}:nth-child(2)`,
  },
};
