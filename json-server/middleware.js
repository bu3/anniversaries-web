const moment = require('moment');

module.exports = (req, res, next) => {

  if (req.method === 'POST' && '/anniversaries'.indexOf(req.originalUrl) > -1) {
    req.body.id = new Date().getTime();

    const hireDate = moment(req.body.hireDate);
    console.log('hireDate', hireDate);
    const anniversaryDate = hireDate.add(1, 'year');
    console.log('hireDate', hireDate);
    console.log('anniversaryDate', anniversaryDate);
    req.body.anniversaryDate = anniversaryDate.format('YYYY-MM-DD');
  }
  next();
};
