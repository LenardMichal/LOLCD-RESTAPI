/*
  Access-Control-Allow-Origin allow pages that can acces API
                  A-C-A-Methods allow http methods
                  A-C-A-Headers allow headers


*/
module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};
