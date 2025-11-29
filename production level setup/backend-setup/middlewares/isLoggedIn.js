module.exports = (req, res, next) => {
    console.log('middleware chala');
    req.name = 'aryan';
    next();
}