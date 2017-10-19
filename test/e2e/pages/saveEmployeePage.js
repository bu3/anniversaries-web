const anniversaryLocator = 'li.anniversary';

module.exports = {
  props: {
    anniversaryLocator,
  },
  elements: {
    saveButton: 'button[class="saveBtn"]',
    title: 'h1',
    employeeName: 'input.name',
    employeeHiringDate: 'input.hiringDate',
  },
};
