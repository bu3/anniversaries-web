const moment = require('moment');

module.exports = (req, res, next) => {
  if (req.method === 'POST' && '/employees'.indexOf(req.originalUrl) > -1) {
    const hireDate = moment(req.body.hireDate);
    const anniversaryDate = hireDate.add(1, 'year');
    req.body.anniversaryDate = anniversaryDate.format('YYYY-MM-DD');

    req.originalUrl = req.originalUrl.replace('/employees', '/anniversaries');
    console.log('Body', req.body);
    console.log('URL', req.originalUrl);
  }
  next();
};
